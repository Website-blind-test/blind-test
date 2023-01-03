import React from "react";
import { useState } from "react";
import {IoAddOutline} from "react-icons/io5";
import { PageTitle } from "../../atoms/PageTitle/PageTitle";
import { AddThemeButton } from "../../molecules/AddThemeButton/AddThemeButton";
import { StyledCreateGameOrga } from "./style";
import { AddThemeDialog } from "../../molecules/AddThemeDialog/AddThemeDialog";
import { TimerGameButton } from "../../molecules/TimerGameButton/TimerGameButton";

export const CreateGameOrga = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <StyledCreateGameOrga>
            <PageTitle>Partie de pseudo</PageTitle>
            <AddThemeButton icon={IoAddOutline} setIsOpen={setIsOpen}>Thèmes</AddThemeButton>
            <TimerGameButton>Temps : </TimerGameButton>
            <AddThemeDialog isOpen={isOpen} setIsOpen={setIsOpen}></AddThemeDialog>
        </StyledCreateGameOrga>
    )
}