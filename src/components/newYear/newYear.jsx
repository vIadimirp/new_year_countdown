import CountdownCircle from "./countdownCircle/countdownCircle";
import BarSection from "./barSection/barSection";
import {
    differenceInMilliseconds,
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInSeconds,
    format
} from "date-fns";

import "./newYear.css";


export default function NewYear({now}) {

    let newYearEnd = new Date(now.getFullYear(), 0, 1, 0, 0, 0);
    let newYearStart = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

    let daysDifference = differenceInDays(newYearStart, now);
    let hoursDifference = differenceInHours(newYearStart, now) % 24;
    let minutesDifference = differenceInMinutes(newYearStart, now) % 60;
    let secondsDifference = differenceInSeconds(newYearStart, now) % 60;

    let daysPercent = 100 - (differenceInMilliseconds(now, newYearEnd) / 86400000) % 1 * 100;
    let hoursPercent = 100 - (differenceInMilliseconds(now, newYearEnd) / 3600000) % 1 * 100;
    let minutesPercent = 100 - (differenceInMilliseconds(now, newYearEnd) / 60000) % 1 * 100;
    let secondsPercent = 100 - (differenceInMilliseconds(now, newYearEnd) / 1000) % 1 * 100;

    let getCurrentState = () => {
        if (
            daysDifference == 0 &&
            hoursDifference == 0 &&
            minutesDifference == 0 &&
            secondsDifference < 1
        ) {return 7;}
        else if (
            daysDifference == 0 &&
            hoursDifference == 0 &&
            minutesDifference == 0 &&
            secondsDifference < 11
        ) {return 6;}
        else if (
            daysDifference == 0 &&
            hoursDifference == 0 &&
            minutesDifference == 0 &&
            secondsDifference < 20
        ) {return 5;}
        else if (
            daysDifference == 0 &&
            hoursDifference == 0 &&
            minutesDifference == 0 &&
            secondsDifference < 30
        ) {return 4;}
        else if (
            daysDifference == 0 &&
            hoursDifference == 0 &&
            minutesDifference == 0
        ) {return 3;}
        else if (
            daysDifference == 0 &&
            hoursDifference == 0
        ) {return 2;}
        else if (
            daysDifference == 0
        ) {return 1;}
        else {return 0;}
    }; let currentState = getCurrentState();


    return (
        <div className="newYear">
            {currentState < 4 ? <div className="headingSection">
                <div className="title textTitle">Waiting for the New Year</div>
                <div className="subtitle textSecondary">Countdown to the January 1, {now.getFullYear() + 1}</div>
            </div> : null}
            <div className="countdownSection">
                {currentState < 1 ? <CountdownCircle text={"Days"} percent={daysPercent} value={daysDifference} /> : null}
                {currentState < 2 ? <CountdownCircle text={"Hours"} percent={hoursPercent} value={hoursDifference} /> : null}
                {currentState < 3 ? <CountdownCircle text={"Minutes"} percent={minutesPercent} value={minutesDifference} /> : null}
                {currentState < 4 ? <CountdownCircle text={"Seconds"} percent={secondsPercent} value={secondsDifference} /> : null}
                {currentState > 3 ? <CountdownCircle text={null} percent={secondsPercent} value={secondsDifference} expand /> : null}
            </div>
            {daysDifference > 0 ? <BarSection now={now} newYearStart={newYearStart} newYearEnd={newYearEnd} /> : null}
            {/* <div className="infoSection hidden">
                <div className="card infoCard">
                    <div className="heading">From {now.getFullYear() - 1}:</div>
                    <div className="sep"></div>
                    <div className="values">
                        <span>Months: {(differenceInMilliseconds(now, newYearEnd) / 86400000 / 30).toFixed(7)}</span>
                        <span>Weeks: {(differenceInMilliseconds(now, newYearEnd) / 86400000 / 7).toFixed(7)}</span>
                        <span>Days: {(differenceInMilliseconds(now, newYearEnd) / 86400000).toFixed(6)}</span>
                        <span>Hours: {(differenceInMilliseconds(now, newYearEnd) / 3600000).toFixed(4)}</span>
                        <span>Minutes: {(differenceInMilliseconds(now, newYearEnd) / 60000).toFixed(3)}</span>
                        <span>Seconds: {(differenceInMilliseconds(now, newYearEnd) / 1000).toFixed(1)}</span>
                        <span>Milliseconds: {differenceInMilliseconds(now, newYearEnd).toString().slice(0, -2) + "00"}</span>
                    </div>
                </div>
                <div className="card infoCard">
                    <div className="heading">To 2024:</div>
                    <div className="sep"></div>
                    <div className="values">
                        <span>Months: {(differenceInMilliseconds(newYearStart, now) / 86400000 / 30).toFixed(7)}</span>
                        <span>Weeks: {(differenceInMilliseconds(newYearStart, now) / 86400000 / 7).toFixed(7)}</span>
                        <span>Days: {(differenceInMilliseconds(newYearStart, now) / 86400000).toFixed(6)}</span>
                        <span>Hours: {(differenceInMilliseconds(newYearStart, now) / 3600000).toFixed(4)}</span>
                        <span>Minutes: {(differenceInMilliseconds(newYearStart, now) / 60000).toFixed(3)}</span>
                        <span>Seconds: {(differenceInMilliseconds(newYearStart, now) / 1000).toFixed(1)}</span>
                        <span>Milliseconds: {differenceInMilliseconds(newYearStart, now).toString().slice(0, -2) + "00"}</span>
                    </div>
                </div>
            </div> */}
        </div>
    );

}
