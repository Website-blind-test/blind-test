import { Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { StyledUploadButtonField, StyledUploadField } from "./style";
import { FileItem } from "../../atoms/FileItem/FileItem";
import { useEffect } from "react";
import { useRef } from "react";


export const UploadFiles = ({file, setFile}) => {

    const url = "http://localhost:8001/upload"

    const ref = useRef()

    const onChange = (e) => {
        const file = e.target.files[0]
        file.isUploading = true;
        setFile(file)

        const formData = new FormData();
        formData.append(
            'file',
            file,
        )

        return axios.post(url, formData).then((res) => {
            file.isUploading = false
            setFile(file);
        })
    }

    const removeFile = (fileName) => {
        return axios.delete(url, {data: {fileName: fileName}}, {
            header: {'Content-Type': 'application/json'}
        }).then((response) => {
            setFile(null)
        }
        ).catch((err) => {
            console.log(err)
        })
    }

    return(
        <StyledUploadField >
            <StyledUploadButtonField>
                <input type="file" name="file" accept="audio/*" className="fileInput" onChange={(e) => onChange(e)} ref={ref} />
                <button>
                    <i>
                        <FaPlus />
                    </i>
                    Upload
                </button>
            </StyledUploadButtonField>
            {file && <FileItem file={file} removeFile={removeFile}/>}
            <Typography variant="string">Supported Files : MP3, MP4</Typography>
        </StyledUploadField>
    )
}