import "./newYearCame.css";


export default function NewYearCame({now}) {

    return (<>
        <div className="newYearCame">
            <div className="previousYear">{now.getFullYear() - 1}</div>
            <div className="thisYear">{now.getFullYear()}</div>
            <div className="happyNewYearText textSecondary">Happy New Year!</div>
        </div>
        <div className="fireworkContainer">
            <div className="firework"></div>
        </div>
    </>);

}
