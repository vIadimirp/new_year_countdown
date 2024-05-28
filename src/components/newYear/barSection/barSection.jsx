import { differenceInMilliseconds, format } from "date-fns";

import "./barSection.css";


export default function BarSection({now, newYearStart, newYearEnd}) {

    let newYearPercent = 100 * differenceInMilliseconds(now, newYearEnd) / differenceInMilliseconds(newYearStart, newYearEnd);

    let toLength = (s, l) => "0".repeat(l - s.toString().length) + s.toString();
    let nowFormated = `${format(now, "MMMM d, y  HH:mm:ss")}.${toLength(now.getMilliseconds(), 3)[0]}`;


    return (
        <div className="barSection">
            <div className="text nowText">
                <span>It{"'"}s now {nowFormated}</span>
            </div>
            <div className="text datesText">
                <span className="textSecondary">January 1, {now.getFullYear()}</span>
                <span className="now">It{"'"}s now {nowFormated}</span>
                <span className="textSecondary">January 1, {now.getFullYear() + 1}</span>
            </div>
            <div className="bar barGray">
                <div className="barLeft" style={{width: `${newYearPercent}%`}}></div>
            </div>
            <div className="text percentText">
                <span>{newYearPercent.toFixed(7)}%<br />of the year has passed</span>
                <span>{(100 - newYearPercent).toFixed(7)}%<br />of the year left</span>
            </div>
        </div>
    );

}
