import React from 'react'
import { useState, useEffect } from 'react';
//import timer from "../../src/screens/User/TestScreen"

const Timer = (props:any) => {
    let [initialMinute,setinitialMinute] = useState(1)
    let  [initialSeconds, setinitialSeconds] = useState(0)
    let [ minutes, setMinutes ] = useState(initialMinute);
    let [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer;