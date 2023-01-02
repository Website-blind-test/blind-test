import { Button, Divider } from "@mui/material"
import { MenuBar } from "../../atoms/MenuBar/MenuBar"
import { useState} from "react"
import { AiOutlineMenu } from "react-icons/ai";
import "./Menu.css";

import {Backdrop} from "@mui/material";

export const Menu = ({menus}) => {
    const generateMenu = () => {
        return menus.map((menu, i) => {
            console.log(menu.divider)
            return (
            <>
                <Button href={menu.url} key={i} className="menuButton" sx={{display:"flex", justifyContent:"left",marginBottom:"10px", marginTop: "10px", color:"#FFFF", borderRadius:"0px"}}>
                    {menu.icon}
                    <div className="buttonTitle">{menu.title}
                </div></Button>
                {menu.divider && <Divider sx={{bgcolor:"white"}}/>}
            </>
            )
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