'use client'
/** React Import  */
import React, { useState, useEffect, useRef } from 'react'

/** Libraries */
import { Controller, useWatch } from 'react-hook-form'
import { motion, AnimatePresence } from "framer-motion"

/** Local imports */
import Formfields from '../../../models/formfields.json'

/** Icons */
import AngleIcon from '@/Icons/chevron-down.svg'
import FillCheck from '@/Icons/visa-check.svg'
import CircleIcon from '@/Icons/visa-check.svg'

const CustomSelect = ({
    control,
    name,
    parent,
    data,
    label = true,
    searchable = false,
    styles,
    multi,
    show,
    type,
    onSelectChange,
    dropdownpostion,
    disabled
}) => {

    const ButtonRef = useRef(null)
    const [Drop, SetDrop] = useState(false)
    const [Search, SetSearch] = useState('')
    // FIXED LABEL LOOKUP FOR FIELD ARRAY
    let FieldName;

    if (parent) {
        if (name.startsWith("brands_used")) {
            const lastKey = name.split(".").pop();
            FieldName = Formfields[parent]["brands_used"][lastKey];
        } else {
            FieldName = Formfields[parent][name];
        }
    } else {
        FieldName = Formfields[name];
    }

    // const FieldName = parent ? (Formfields[parent])[name] : Formfields[name]
    const watch = useWatch({ control, name })

    useEffect(() => {
        const handleClickOutside = ({ target }) => {
            if (!ButtonRef.current?.contains(target)) {
                SetDrop(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const filterData = (data, key) => {
        const regex = new RegExp(key, "i")
        return data.filter(item => regex.test(item.label))
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <div className={`${styles.te_input_select} ${error ? styles.error : ''}`}>

                    {/* ✅ Static normal label */}
                    {label && (
                        <label className={styles.FormLabel}>
                            {FieldName?.label}
                        </label>
                    )}

                    <div className={styles.te_droppable_input} ref={ButtonRef}>
                        <button
                            className={`${styles.wd_input} ${multi ? styles.wd_multi : ""} ${disabled ? styles.tp_disabled : ""}`}
                            type="button"
                            onClick={() => !disabled && SetDrop(!Drop)}
                            disabled={disabled}
                        >
                            {!field.value || (Array.isArray(field.value) && field.value.length === 0) ? (
                                <span className={styles.te_placeholder}>
                                    {FieldName?.button || "Select..."}
                                </span>
                            ) : multi ? (
                                <span>
                                    {(() => {
                                        const selected = data.filter(item => field.value.includes(item.value));
                                        const first = selected[0]?.label;
                                        const more = selected.length > 1 ? `, +${selected.length - 1}` : "";
                                        return `${first}${more}`;
                                    })()}
                                </span>
                            ) : (
                                <span>
                                    {data?.find(val => val.value === field.value)?.label ||
                                     (typeof field.value === 'string' && field.value.trim() ? field.value : null) ||
                                     FieldName?.button ||
                                     FieldName?.placeholder ||
                                     "Select..."}
                                </span>
                            )}


                            <AngleIcon className={styles.te_icon} />
                        </button>

                        {error && <p className={styles.error_msg}>{error.message}</p>}

                        {/* ✅ Multi selected chips */}
                        {multi && Array.isArray(field.value) && field.value.length > 0 && (
                            <div className={styles.te_selected_items}>
                                <div className={styles.te_selected_items_wrap}>
                                    {field.value.map(id => {
                                        const item = data?.find(d => d.value === id)
                                        return (
                                            <span
                                                key={id}
                                                className={styles.multi_select}
                                                onClick={() => {
                                                    let ids = [...field.value]
                                                    ids = ids.includes(item.value)
                                                        ? ids.filter(v => v !== item.value)
                                                        : [...ids, item.value]
                                                    field.onChange(ids)
                                                    SetDrop(false)
                                                }}
                                            >
                                                {item?.label}
                                                {/* <CrossIcon /> */}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        )}

                        <AnimatePresence>
                            {Drop && data && (
                                <motion.div
                                    className={`${styles.te_droppable_input_drop} ${dropdownpostion ? styles.te_droppable_input_drop_position : ''}`}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    variants={dropVariants}
                                >
                                    {searchable && (
                                        <div className={styles.te_search_block}>
                                            <div className={styles.te_search_wrap}>
                                                {/* <div className={styles.te_search_icon}><SearchIcon /></div> */}
                                                <input
                                                    type="text"
                                                    placeholder="search..."
                                                    value={Search}
                                                    onChange={(e) => SetSearch(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <ul className={styles.te_droppable_input_drop_list}>
                                        {filterData(data, Search).length ? (
                                            filterData(data, Search).map((item, i) => {
                                                const active = multi ? watch?.includes(item.value) : watch === item.value
                                                return (
                                                    <li key={i} className={active ? styles.te_active : ''}>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                let ids
                                                                if (multi) {
                                                                    ids = watch?.includes(item.value)
                                                                        ? watch.filter(v => v !== item.value)
                                                                        : [...(watch || []), item.value]
                                                                } else {
                                                                    ids = item.value
                                                                }
                                                                field.onChange(ids)
                                                                if (!multi) SetDrop(false)
                                                            }}
                                                        >
                                                            <span className={styles.te_text}>{item.label}</span>
                                                            {active && (
                                                                !multi ? <CircleIcon className={styles.te_icon} /> : <FillCheck className={styles.te_icon} />
                                                            )}
                                                        </button>
                                                    </li>
                                                )
                                            })
                                        ) : (
                                            <li className={styles.te_no_data}>
                                                <p className={styles.te_empty}>No Data Found</p>
                                            </li>
                                        )}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                </div>
            )}
        />
    )
}

export default CustomSelect

const dropVariants = {
    open: { opacity: 1, scaleX: 1, scaleY: 1, transition: { type: "spring", bounce: 0, duration: 0.35 } },
    closed: { opacity: 0, scaleX: 0.9, scaleY: 0, transition: { type: "spring", bounce: 0, duration: 0.35 } }
}
