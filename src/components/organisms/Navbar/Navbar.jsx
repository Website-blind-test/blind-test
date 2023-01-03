import React from "react";
import {useState} from "react"
import "./style.css";
import { Menu } from "../../molecules/Menu/Menu";
import {AiOutlineHome} from "react-icons/ai";
import {TbLadder} from "react-icons/tb";
import {CgProfile} from "react-icons/cg";
import {FiLogOut} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/authentication";


export const Navbar = (props) => {

    const [content, setContent] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("chèvre")
        dispatch(logout()).unwrap()
        
    }
    return(
        <div className="navbarStyle">
            <Menu 
            openMenu={openMenu}
            setOpenMenu={() => {setOpenMenu(!openMenu)}}
            changeContent={() => {
                    setContent(!content)
                }} 
            menus={[
                {title:"Accueil", icon :(<AiOutlineHome size='1.5em'/>), url: "home", divider: true},
                {title:"Profil", icon :(<CgProfile size='1.5em'/>), url: "profil", divider: true},
                {title: "Classement", icon :(<TbLadder size='1.5em'/>), divider: true},
                {title: "Déconnexion", icon :(<FiLogOut size='1.5em' transform="rotate(180)" />),url: "/", divider: false, action: {handleLogout}},
                
            ]}></Menu>

        </div>
    )
}