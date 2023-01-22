import React from "react";
import NumberSelector from 'react-number-selector'; 
import 'react-number-selector/dist/index.css';
import { StyledTimerGameButton } from "./style";

export const TimerGameButton = (props) => {
    return(
        <StyledTimerGameButton>
            <p>{props.children}</p>
            <NumberSelector/>
        </StyledTimerGameButton>
    )
}