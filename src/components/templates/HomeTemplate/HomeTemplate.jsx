import React from "react";
import { TopRibbon } from "../../organisms/TopRibbon/TopRibbon";
import {HomeOrga} from "../../organisms/HomeOrga/HomeOrga";
import { useSelector } from "react-redux";

export const HomeTemplate = () => {

    const {username} = useSelector((state) => state.auth.userInfo)

    return(
        <>
            <TopRibbon>Bienvenue {username} !</TopRibbon>
            <HomeOrga/>
        </>
    )
}