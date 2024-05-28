import { differenceInSeconds } from "date-fns";

import "./newYear10s.css";


export default function NewYear10s({now}) {

    let newYearStart = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    let secondsDifference = differenceInSeconds(newYearStart, now) % 60;


    return (
        <div className="newYear10s">
            <div className="n">{secondsDifference}</div>
        </div>
    );

}
