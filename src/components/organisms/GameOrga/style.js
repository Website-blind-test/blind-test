import styled from "styled-components";

export const StyledGame = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;

    .image {
        margin-top: 2em;
    }

    #audio {
        margin-top: 5em;
    }
    .response {
        margin-top: 3em;
    }

    .valid {
        margin-top: 3em;
        width: 8rem;
        height: 4rem;

        background-color: #0000ff;
        border: none;
        border-radius: 5px;
        color: #00FFD1;
        cursor: pointer;
        outline: none;
    }

`

export const StyledButtonReady = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        font-size: 2em;
        margin-top: 6em;
        width: 6em;
        height: 5em;
        background-color: #0000ff;
        border: none;
        border-radius: 5px;
        color: #00FFD1;
        cursor: pointer;
        outline: none;
    }
`
export const StyledChronometer = styled.div`

    text-align: center;
    width: 2em;
    height: 2em;
    border-radius: 100%;
    margin-top: 0.5em;
    font-size: 2em;
    border: solid 1px;
    background-color: white;

    p {
        color: #282c34;
        position: relative;
        bottom: 23px;
        font-weight: bold;
    }
`

export const StyledEndGame = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            margin-top: 1rem;
            width: 7rem;
            height: 4rem;
            background-color: #0000ff;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
           
        }
        `

export const StyledEndGameVictory = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5em;

    background-color: #00cc00;
    border: solid 1px;
    font-size: 2em;
`
export const StyledEndGameDefeat = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5em;

    background-color: red;
    border: solid 1px;
    font-size: 2em;
`