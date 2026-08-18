'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { Controller } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import CalenderIcon from '@/Icons/calendar.svg';
import 'react-datepicker/dist/react-datepicker.css';
import Formfields from '../../../models/formfields.json';
import DropDownIcon from "@/Icons/chevron-down.svg";

/* ---------------- helpers ---------------- */
const toLocalMidnight = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const parseToDate = (val) => {
    if (!val) return null;
    if (val instanceof Date && !isNaN(val)) return toLocalMidnight(val);
    if (typeof val === 'string') {
        if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
            const [y, m, d] = val.split('-').map(Number);
            return new Date(y, m - 1, d);
        }
        const n = new Date(val);
        return isNaN(n) ? null : toLocalMidnight(n);
    }
    return null;
};

const serialize = (date, mode) => {
    if (!date) return null;
    const d = toLocalMidnight(date);
    if (mode === 'local') {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }
    if (mode === 'iso') return d.toISOString();
    return d;
};

/* ---------------- animation ---------------- */
const dropVariants = {
    open: { opacity: 1, scaleY: 1, transition: { type: 'spring', bounce: 0, duration: 0.22 } },
    closed: { opacity: 0, scaleY: 0.98, transition: { type: 'spring', bounce: 0, duration: 0.16 } },
};

const EDGE = 8;
const MAX_W = 360;

const CustomDateTimePicker = ({
    name,
    parent,
    control,
    styles: s,
    label = true,
    labelText,
    placeholder,
    minDate,
    storeAs = 'date',
    disabled = false,
}) => {

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const panelRef = useRef(null);

    const [panelPos, setPanelPos] = useState({ left: 0, top: 0, width: 0, origin: 'top' });

    const close = () => setOpen(false);
    const toggle = () => { if (!disabled) setOpen((v) => !v); };

    /* Get label/placeholder from form field JSON */
    const fieldMeta = (() => {
        if (!name) return undefined;
        const key = name.includes('.') ? name.split('.').pop() : name;
        return parent ? Formfields?.[parent]?.[key] : Formfields?.[key];
    })();

    const effectiveLabel = labelText ?? fieldMeta?.label ?? '';
    const effectivePlaceholder = placeholder ?? fieldMeta?.button ?? fieldMeta?.placeholder ?? 'Select date';

    /* close on click outside or ESC */
    useEffect(() => {
        const onDoc = (e) => {
            if (!anchorRef.current) return;
            const insideAnchor = anchorRef.current.contains(e.target);
            const insidePanel = panelRef.current?.contains(e.target);
            if (!insideAnchor && !insidePanel) close();
        };
        const onKey = (e) => { if (e.key === 'Escape') close(); };

        document.addEventListener('mousedown', onDoc);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('mousedown', onDoc);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

    /* position dropdown */
    const reposition = useCallback(() => {
        const anchorEl = anchorRef.current;
        const panelEl = panelRef.current;
        if (!anchorEl || !panelEl) return;

        const ar = anchorEl.getBoundingClientRect();
        const cap = Math.min(window.innerWidth - EDGE * 2, MAX_W);
        const desiredW = Math.max(ar.width, cap);

        let left = ar.left;
        if (left + desiredW + EDGE > window.innerWidth) {
            left = Math.max(EDGE, window.innerWidth - desiredW - EDGE);
        } else left = Math.max(EDGE, left);

        const panelH = panelEl.offsetHeight || 320;
        let top = ar.bottom + 8;
        let origin = 'top';

        if (top + panelH + EDGE > window.innerHeight && (ar.top - 8 - panelH) > EDGE) {
            top = ar.top - 8 - panelH;
            origin = 'bottom';
        }

        setPanelPos({ left, top, width: desiredW, origin });
    }, []);

    useEffect(() => {
        if (!open) return;
        const raf = requestAnimationFrame(reposition);
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', reposition);
            window.removeEventListener('scroll', reposition, true);
        };
    }, [open, reposition]);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
                const selectedDate = parseToDate(value);
                const hasValue = !!selectedDate;

                const hasError = !!error;
                const inputWrapClass = [
                    s?.input_wrap,
                    open && s?.input_wrap_focus,
                    hasError && s?.input_wrap_error,
                    disabled && s?.input_wrap_disabled
                ].filter(Boolean).join(' ');

                return (
                    <div className={s?.hq_input_group}>
                        {label && <label className={s?.label}>{effectiveLabel}</label>}

                        <div ref={anchorRef} style={{ position: 'relative' }}>
                            <button
                                type="button"
                                className={inputWrapClass}
                                onClick={toggle}
                                disabled={disabled}
                                aria-haspopup="dialog"
                                aria-expanded={open}
                                style={{ position: 'relative' }}
                            >
                                <div className={s?.input} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    {hasValue ? (
                                        <p className={s?.select_btn_text_active}>
                                            {selectedDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                                        </p>
                                    ) : (
                                        <p className={s?.select_btn_text}>{effectivePlaceholder}</p>
                                    )}
                                </div>
                                <div className={s?.icon_wrap}><DropDownIcon /></div>
                            </button>

                            <AnimatePresence>
                                {open && (
                                    <motion.div
                                        ref={panelRef}
                                        className={s?.droppable_panel}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={dropVariants}
                                        role="dialog"
                                        style={{
                                            position: 'fixed',
                                            left: `${panelPos.left}px`,
                                            top: `${panelPos.top}px`,
                                            width: `${panelPos.width}px`,
                                            maxWidth: `min(${MAX_W}px, calc(100vw - ${EDGE * 2}px))`,
                                            minWidth: `${panelPos.width}px`,
                                            transformOrigin: panelPos.origin
                                        }}
                                    >
                                        <DatePicker
                                            inline
                                            selected={selectedDate}
                                            onChange={(date) => {
                                                onChange(serialize(date, storeAs));
                                                close();
                                            }}
                                            dateFormat="dd-MMM-yyyy"
                                            minDate={parseToDate(minDate) || undefined}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {hasError && (
                            <div className={s?.error_msg}>
                                <p className={s?.error}>{error.message || 'Invalid date'}</p>
                            </div>
                        )}
                    </div>
                );
            }}
        />
    );
};

export default CustomDateTimePicker;
