'use client';
import React from 'react';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import FormFields from '../../../models/formfields.json';
import FileIcon from '@/Icons/file-text.svg';

const FileDrag = ({
    name,
    parent,
    setValue,
    clearErrors,
    label = true,
    control,
    watch,
    styles,
    Asterisk = false,
}) => {
    const fieldMeta = parent ? FormFields[parent]?.[name] : FormFields[name];
    const selectedFile = watch ? watch(name) : null;

    return (
        <div className={styles.FormWrapper}>
            {label && (
                <label className={styles.FormLabel}>
                    <span>
                        {fieldMeta?.label}
                        {Asterisk && <span className={styles.asterisk}>*</span>}
                    </span>
                </label>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <Dropzone
                            onDrop={(acceptedFiles) => {
                                if (acceptedFiles && acceptedFiles.length > 0) {
                                    setValue(name, {
                                        type: 'local',
                                        dataType: name,
                                        data: acceptedFiles,
                                        fileName: acceptedFiles[0].name,
                                        url: URL.createObjectURL(acceptedFiles[0]),
                                    });
                                    if (clearErrors) clearErrors(name);
                                }
                            }}
                            accept={{ 'application/pdf': ['.pdf'], 'image/*': ['.png', '.jpg', '.jpeg'] }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <div className={styles.wd_dropzone_wrapper}>
                                    <div {...getRootProps()} className={styles.wd_dropzone}>
                                        <input {...getInputProps()} />
                                        {selectedFile?.fileName || selectedFile?.data?.[0]?.name ? (
                                            <div className={styles.file_selected_info}>
                                                <FileIcon className={styles.file_icon_small} />
                                                <span className={styles.file_name_text}>
                                                    {selectedFile.fileName || selectedFile.data[0].name}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className={styles.dropzone_content}>
                                                <FileIcon className={styles.file_icon_small} />
                                                <div className={styles.dropzone_text_block}>
                                                    <span className={styles.upload_title}>Choose file</span>
                                                    <span className={styles.drag_text}>or Drag & Drop PDF</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                        {error && <p className={styles.error_msg}>{error.message}</p>}
                    </>
                )}
            />
        </div>
    );
};

export default FileDrag;