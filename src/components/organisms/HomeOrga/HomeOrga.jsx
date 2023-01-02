import React from "react";
import { HomeListButton } from "../../molecules/HomeListButton/HomeListButton";
import {IoAddOutline} from "react-icons/io5";
import { FiPlay } from "react-icons/fi";
import {MdOutlinePlaylistAdd} from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";


export const HomeOrga = (props) => {
    return(
        <HomeListButton
        buttons={[
            {text: "Créer une partie", icon:(<IoAddOutline size='1.5em'/>)},
            {text: "Rejoindre une partie", icon :(<FiPlay size='1.5em'/>)},
            {text: "Ajouter une musique", icon :(<MdOutlinePlaylistAdd size='1.5em'/>), url:'/add-music'},
            {text: "Supprimer une musique", icon :(<AiOutlineDelete size='1.5em'/>)}
        ]}></HomeListButton>
    )
}