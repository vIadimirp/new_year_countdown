import "./countdownCircle.css";


export default function CountdownCircle({text, percent, value, expand}) {

    // let getBarColor = n => n % 2 == 1 ? "var(--bar)" : "var(--bar-bg)";
    let getConicGradient = () => value % 2 == 1 ? 
                                                    `conic-gradient(var(--bar) 0 ${percent}%,
                                                                    var(--bar-bg) ${percent}% 100%)` : 
                                                    `conic-gradient(var(--bar-bg) 0 ${percent}%,
                                                                    var(--bar) ${percent}% 100%)`;

    let className = `countdownCircle${expand ? " countdownCircleExpand" : ""}`;


    return (
        <div className={className} style={{background: getConicGradient()}}>
            <div className="number textBig">{value}</div>
            {text ? <div className="text textSecondary">{text}</div> : null}
        </div>
    );

}
