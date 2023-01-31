import React from "react";
import { StyledSelectTheme } from "./styleSelectTheme";
import { StyledAssociatedTheme } from "./styleAssociatedTheme";
import { useState } from "react";
import { ThemeAssociated } from "../ThemeAssociated/ThemeAssociated";
import { AiFillDelete } from "react-icons/ai";

export const SelectTheme = (props) => {

    const [themeAssociated, setThemeAssociated] = useState([]);

    const removeThemeAssociated = (theme) => {
        setThemeAssociated(themeAssociated.filter(e => e !== theme));
    }

    const selectTheme = (playlist) => {
        if (themeAssociated.find(e => e === playlist.target.value) == null && playlist.target.value !== "default") {
            setThemeAssociated( [...themeAssociated, playlist.target.value]);
        }
       
    }
    const generateThemeAssociatedButtons = () => {
        if(themeAssociated.length !== 0) {
            return themeAssociated.map((theme, i) => {
                return <ThemeAssociated icon={AiFillDelete} remove={removeThemeAssociated}>{theme}</ThemeAssociated>            
            })
        }
    }
    
    const generatePlaylists = () => {
        
        var options = [];
        if (props.playlists) {
            for(var i=0; i<props.playlists.length; i++) {
                options.push(<option value={props.playlists[i].categorie_lib}>{props.playlists[i].categorie_lib}</option>)
            }
        }
        return options;
    }

    return( <>
    <StyledSelectTheme id={props.id}>
        <select onChange={playlist => selectTheme(playlist)} name="playlist" id="select_playlist">
            <option value="default">Choisissez un thème</option>
            {generatePlaylists()}

        </select>
        </StyledSelectTheme>
        
        <StyledAssociatedTheme>
            {generateThemeAssociatedButtons()}
        </StyledAssociatedTheme>
        </>)
}