import { MenuButton } from "../../atoms/MenuButton/MenuButton"
import { MenuBar } from "../../atoms/MenuBar/MenuBar"
import { useState} from "react"
import { AiOutlineMenu } from "react-icons/ai"

import {Backdrop} from "@mui/material";

export const Menu = ({menus}) => {
    const generateMenu = () => {
        return menus.map((menu, i) => {
            return <MenuButton key={i}>{menu.icon}<div className="buttonTitle">{menu.title}</div></MenuButton>
        })
    }

    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (

        <MenuBar isOpen={openMenu}>
            {openMenu ? (<><p onClick={handleOpenMenu} className="menuBurger"><AiOutlineMenu size='1.5em'/></p>{
                generateMenu()
                
            }<Backdrop open={true} invisible={true}/></>) : (<p onClick={handleOpenMenu} className="menuBurger"><AiOutlineMenu size='1.5em'/></p>)}
            
        </MenuBar>
    )
}