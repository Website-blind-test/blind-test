import { StyledButtonReady, StyledChronometer, StyledEndGame, StyledEndGameDefeat, StyledEndGameVictory, StyledGame } from "./style" 

import {FiPlay} from "react-icons/fi";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { getTrack, playTrack } from "../../../store/slices/track"
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { checkToken } from "../../../store/slices/authentication";

export const GameOrga = () => {

    let navigate = useNavigate();

    const audioRef = useRef();
    const dispatch = useDispatch();
    dispatch(checkToken())
    const [time, setTime] = useState(30)
    const resRef = useRef();
    let timerId;

    const [isReady, setIsReady] = useState(false)
    const [url, setUrl] = useState()
    const [title, setTitle] = useState();
    const [isWin, setIsWin] = useState(null)
    let currentTrack = useSelector((state) => state);
    dispatch(getTrack())
        
    useEffect(() => {
        var random
        var trackList;
        if(currentTrack.track.trackList){
            trackList = JSON.parse(currentTrack.track.trackList)
            random = Math.floor(Math.random()*trackList.length)
            if(url === undefined){
                setUrl(trackList[random].url)
            }
            if(title === undefined){
                setTitle(trackList[random].title)
            }
        }
        if(audioRef.current && isReady){
            audioRef.current.play()
        }
        if(time == 0 && isWin === null){
            if(audioRef){
                audioRef.current.pause();
                if(resRef.current.value == title){
                    setIsWin(true)
                }
                else {
                    setIsWin(false)
                }
            }
        }
        if(isReady){
            timerId = setInterval(() => {
                if(time != 0){
                    setTime(time-1) 
                }
            }, 1000)
        }
        
        return () => {
            clearInterval(timerId)
        }
    })

    const handleReady = () => {
        setIsReady(true)
    }

    const handleHomeBack = () => {
        navigate("/home");  
    }

    if(isWin === null){
        if(isReady){
            return (
                <StyledGame>
                    <StyledChronometer>
                        <p>{time}</p>
                    </StyledChronometer>     
                    <FiPlay className="image "size="8em" style={{color: "white"}}/>
                    {audioRef && <audio controls ref={audioRef} id="audio">
                        <source src={"./assets/music/"+url} type="audio/mpeg" />
                    </audio>}
                    <TextField inputRef={resRef} className="response"  sx={{bgcolor: "white"}} />
                </StyledGame>
            )
        }
        else{
            return(
                <StyledButtonReady>
                    <button onClick={handleReady}>Prêt</button>
                </StyledButtonReady>
            )
        }
    }
    else if(isWin){
        return(
            <StyledEndGame>
                <StyledEndGameVictory>
                    <p>Victoire</p>
                </StyledEndGameVictory>
                <button onClick={handleHomeBack}>Retour au menu</button>
            </StyledEndGame>
        )
    }
    else if(!isWin){
        return(
            <StyledEndGame>
                <StyledEndGameDefeat>
                    <p>Défaite</p>
                </StyledEndGameDefeat>
                <button onClick={handleHomeBack}>Retour au menu</button>
            </StyledEndGame>
            
        )
    }
}