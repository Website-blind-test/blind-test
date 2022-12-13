import React from "react";
import {useState} from "react"
import "./style.css";
import { Menu } from "../../molecules/Menu/Menu";
import {AiOutlineHome} from "react-icons/ai";
import {TbLadder} from "react-icons/tb";
import {CgProfile} from "react-icons/cg";
import {FiLogOut} from "react-icons/fi";


export const Navbar = (props) => {

    const [content, setContent] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <>
            <Menu 
            openMenu={openMenu}
            setOpenMenu={() => {setOpenMenu(!openMenu); console.log("bite")}}
            changeContent={() => {
                    setContent(!content)
                }} 
            menus={[
                {title:"Accueil", icon :(<AiOutlineHome size='1.5em'/>)},
                {title:"Profil", icon :(<CgProfile size='1.5em'/>)},
                // {title:"Créer une partie", icon :(<IoAddOutline size='1.5em'/>)},
                // {title: "Rejoindre une partie", icon :(<FiPlay size='1.5em'/>)},
                // {title: "Ajouter une musique", icon :(<MdOutlinePlaylistAdd size='1.5em'/>)},
                {title: "Classement", icon :(<TbLadder size='1.5em'/>)},
                {title: "Déconnexion", icon :(<FiLogOut size='1.5em' transform="rotate(180)" />)},
                // {title: "Supprimer une musique", icon :(<AiOutlineDelete size='1.5em'/>)}
                
            ]}></Menu>

        </>
    )
}