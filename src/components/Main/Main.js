import Stack from '@mui/material/Stack';
import {useState} from 'react';

function Main(){
    const [birthDay, setDay] = useState(0);
    const [birthMonth, setMonth] = useState(0);
    const [birthYear, setYear] = useState(0);

    const [daysAlive, setDayAlive] = useState(0);
    const [monthsAlive, setMonthAlive] = useState(0);
    const [yearsAlive, setYearAlive] = useState(0);

    
    const [totalMonthsAlive, setTotalMonthsAlive] = useState(0);
    const [totalDaysAlive, setTotalDaysAlive] = useState(0);

    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    const calculateAll = () => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        console.log(date);

        console.log(birthDay);
        console.log(birthMonth);
        console.log(birthYear);

        if (current.getDate()-birthDay < 0){
            if (current.getMonth()+1-birthMonth < 12){
                setDayAlive(current.getDate()-birthDay + daysInMonth[monthsAlive]);
                setMonthAlive(current.getMonth()+1-birthMonth + 1);
                setYearAlive(current.getFullYear()-birthYear);
            }else{
                setDayAlive(current.getDate()-birthDay + daysInMonth[monthsAlive]);
                setMonthAlive(0);
                setYearAlive(current.getFullYear()-birthYear);
            }
        }else{
            setDayAlive(current.getDate()-birthDay);
            setMonthAlive(current.getMonth()+1-birthMonth);
            setYearAlive(current.getFullYear()-birthYear);
        }
        console.log(daysAlive);
        console.log(monthsAlive);
        console.log(yearsAlive);

        setTotalMonthsAlive(yearsAlive*12 + monthsAlive);
        setTotalDaysAlive(yearsAlive*12*30 + monthsAlive*30 + daysAlive);

    };

    return(<>
    <form>
        <Stack direction="column" spacing={2}>
            <label>
            Year:
            <input 
                type="text" 
                name="year" 
                onChange={(e) => setYear(parseInt(e.target.value))}
            />
            </label>
            <label>
            Month:
            <input 
                type="text" 
                name="month" 
                onChange={(e) => setMonth(parseInt(e.target.value))}
            />
            </label>
            <label>
            Day:
            <input 
                type="text" 
                name="day" 
                onChange={(e) => setDay(parseInt(e.target.value))}
                />
            </label>
        
        </Stack>
    </form>
            <button onClick={calculateAll} >Calculate</button>
            <Stack direction="column" spacing={2}>
                <label>Years alive:{yearsAlive}</label>
                <label>Months alive:{monthsAlive}</label>
                <label>Days alive:{daysAlive}</label>
                <label>Total months alive:{totalMonthsAlive}</label>
                <label>Total days alive:{totalDaysAlive}</label>
                <label>Total hours alive:</label>
                <label>Total minutes alive:</label>
                <label>Total seconds alive:</label>
            </Stack>
    </>)
}

export default Main;