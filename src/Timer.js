import React, { useState, useEffect } from 'react';

const Timer = ({ initialTotalSeconds, levelUp }) => {
    let [ currentTotalSeconds, setCurrentTotalSeconds ] = useState(initialTotalSeconds);
    let [ intervalId, setIntervalId ] = useState(null);
    const [ hasBegun, setStart] = useState(false);
    const [ currentDisplayTime, setCurrentDisplayTime ] = useState("00:00:00")

    useEffect(() => { updateTimeDisplay(initialTotalSeconds) }, []);

    const toggleTime = () => {
        // play/pause button should be hidden if not begun or finished, but just in ase
        if (!hasBegun) return;

        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            startClock();
        }
    }

    const startClock = () => {
        intervalId = setInterval(countdown, 1000);
        setIntervalId(intervalId);
    }

    // temporarily show a start button before countdown initiated instead of play/pause
    const handleBegin = () => {
        setStart(true);
        startClock();
    }

    const countdown = () => {
        setCurrentTotalSeconds(currentTotalSeconds--);
        
        if (currentTotalSeconds === 0) {
            currentTotalSeconds = initialTotalSeconds;
            levelUp();
        }

        updateTimeDisplay(currentTotalSeconds);
    }

    const updateTimeDisplay = (currentTime) => {
        // convert currentTotalSeconds to hours and minutes

        let hours = formatAsText(parseInt(currentTime / (60 * 60)));
        let minutes = formatAsText(parseInt(currentTime / 60 - (hours * 60)));
        let seconds = formatAsText(parseInt(currentTime - (hours * 60 * 60) - (minutes * 60)));

        const time = `${minutes}:${seconds}`;

        setCurrentDisplayTime(time);
    }

    const formatAsText = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    }

    return (
        <div className="Timer">
            <p className="currentDisplayTime">{currentDisplayTime}</p>
            {!hasBegun && <button className="btn start" onClick={handleBegin}>Start!</button>}
            {hasBegun && <button className="btn pauseresume" onClick={toggleTime}>{intervalId ? "Pause" : "Resume"}</button>}
        </div>
    )

}

export default Timer;