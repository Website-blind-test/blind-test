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
        <div className="navbarStyle">
            <Menu 
            openMenu={openMenu}
            setOpenMenu={() => {setOpenMenu(!openMenu); console.log("bite")}}
            changeContent={() => {
                    setContent(!content)
                }} 
            menus={[
                {title:"Accueil", icon :(<AiOutlineHome size='1.5em'/>), url: "home"},
                {title:"Profil", icon :(<CgProfile size='1.5em'/>), url: "profil"},
                {title: "Classement", icon :(<TbLadder size='1.5em'/>)},
                {title: "Déconnexion", icon :(<FiLogOut size='1.5em' transform="rotate(180)" />), url:"/"},
                
            ]}></Menu>

        </div>
    )
}