import NewYear from './components/newYear/newYear'
import NewYearCame from './components/newYearCame/newYearCame';
import NewYear10s from './components/newYear10s/newYear10s';
import { useState, useEffect } from 'react'

import './App.css'



export default function App() {

    let [now, setNow] = useState(new Date());


    useEffect(() => {setInterval(() => {setNow(new Date())}, 10)}, []);


    // let [startDate] = useState(new Date());
    // useEffect(() => {
    //     setInterval(() => {
    //         let currentDate = new Date();
    //         let startFrom = new Date(2023, 11, 31, 23, 59, 25);  // new Date(2023, 11, 31, 23, 58, 55)
    //         let speed = 1;  // 2000000
    //         setNow(new Date((currentDate.valueOf() - startDate.valueOf()) * speed + startFrom.valueOf()));
    //     }, 10)
    // }, []);


    return (<>{
        (now.getMonth() == 0 && now.getDate() == 1) ?
        <NewYearCame now={now} /> :
        (now.getMonth() == 11 && now.getDate() == 31 && 
        now.getHours() == 23 && now.getMinutes() == 59 && now.getSeconds() >= 49) ?
        <NewYear10s now={now} /> : <NewYear now={now} />
    }</>)
}
