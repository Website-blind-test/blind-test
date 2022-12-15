import { MenuButton } from "../../atoms/MenuButton/MenuButton"
import { MenuBar } from "../../atoms/MenuBar/MenuBar"
import { useState} from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Typography } from "@mui/material"
<<<<<<< HEAD
import {Backdrop} from "@mui/material";
=======
>>>>>>> 665222e (Add navbar)

export const Menu = ({menus}) => {
    const generateMenu = () => {
        return menus.map((menu, i) => {
            return <MenuButton key={i}>{menu.icon}<Typography align='left'>{menu.title}</Typography></MenuButton>
        })
    }

    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (

        <MenuBar isOpen={openMenu}>
            {openMenu ? (<><p onClick={handleOpenMenu} className="menuBurger"><AiOutlineMenu/></p>{
                generateMenu()
                
            }<Backdrop open={true} invisible={true}/></>) : (<p onClick={handleOpenMenu} className="menuBurger"><AiOutlineMenu/></p>)}
            
        </MenuBar>
    )
}