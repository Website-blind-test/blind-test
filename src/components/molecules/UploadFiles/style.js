import styled from "styled-components"

export const StyledUploadField = styled.div`
    color: #00FFD1;
    background-color: #082C6C;
    border: 3px dashed #cbd5e0;
    margin-top: 1em;
    padding: 1em;
    height: 100px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const StyledUploadButtonField = styled.div`
    position: relative;
    margin-bottom: 0.4em;

    input {
        position: relative;
        height: 50px;
        z-index: 2;
        cursor: pointer;
        opacity: 0;
    }

    button {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #00FFD1;
        background-color: #0000ff;
        font-size: 1.1rem;
        border-radius: 4px;
        border: none;
        outline: none;

        i {
            width: 1em;
            height: 1em;
            padding: 0.4em;
            background-color: #fff;
            color: #0000ff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.8em;
            font-size: 0.8em;
        }
    }
`;