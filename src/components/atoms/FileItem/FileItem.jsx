import React from "react";
import { useEffect } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { StyledFileItem } from "./style";


export const FileItem = ({file, removeFile}) => {

    const removeAudio = () => {
        removeFile(file.name)
    }

    return (
        <StyledFileItem>
            <p>{file.name}</p>
            <i>
                <FaTrash className="fa-trash" onClick={removeAudio}/>
            </i>
        </StyledFileItem>
    )
}