import { Button } from "@mui/material"
import { MenuBar } from "../../atoms/MenuBar/MenuBar"
import { useState} from "react"
import { AiOutlineMenu } from "react-icons/ai";
import "./Menu.css";

import {Backdrop} from "@mui/material";

export const Menu = ({menus}) => {
    const generateMenu = () => {
        return menus.map((menu, i) => {
            return <Button href={menu.url} key={i} className="menuButton" sx={{display:"flex", justifyContent:"left",borderBottom:"solid",paddingBottom:"10px", borderLeft:"none", borderRight:"none", borderTop: "none", borderWidth:"1px", marginBottom:"20px", color:"#FFFF", borderRadius:"0px"}}>
                {menu.icon}
                <div className="buttonTitle">{menu.title}
            </div></Button>
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