import React from 'react';
import './SeasonDisplay.css';
const seasonConfig={
    summer:{
        iconName:"sun",
        text:"Let's hit the beach"
    },
    winter:{
        iconName:"snowflake",
        text:"Burrr,it is chilly"
    }
}
const getseason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    } else {
        return lat > 0 ? "winter" : "summer"
    }
}
const SeasonDisplay = (props) => {
    const season = getseason(props.latitude, new Date().getMonth());
    const {iconName,text}=seasonConfig[season];
    return (

        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    )


}
export default SeasonDisplay;