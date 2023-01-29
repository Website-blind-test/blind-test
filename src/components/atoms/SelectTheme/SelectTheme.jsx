import React from "react";
import { StyledSelectTheme } from "./style";

export const SelectTheme = (props) => {

    const generatePlaylists = () => {
        
        var options = [];
        if (props.playlists) {
            for(var i=0; i<props.playlists.length; i++) {
                console.log(props.playlists[i].categorie_lib);
                options.push(<option value={props.playlists[i].idPlaylist}>{props.playlists[i].categorie_lib}</option>)
            }
        }
        console.log(options);
        return options;
    }

    return <StyledSelectTheme>
        <select name="playlist" id="select_playlist">
            <option value="">Choisissez un thème</option>
            {generatePlaylists()}

        </select>
    </StyledSelectTheme>
}