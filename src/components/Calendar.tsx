import React from 'react';
import './Calendar.css';

// Helper function to generate the days of the month
const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

// Helper function to get the day of the week of the 1st day of the month
const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
};

// Generate a matrix of dates for the calendar
const generateCalendarMatrix = (year: number, month: number) => {
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInMonth = getDaysInMonth(year, month + 1);

    // console.log(firstDay, "firstDay")
    // console.log(daysInMonth, "daysInMonth")
    const calendarMatrix = [];
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const initialDays = Array.from({ length: firstDay }, () => null);
    const filledDays = [...initialDays, ...days];
    const remainingNulls = Array.from({ length: 42 - filledDays.length }, () => null);
    // calendarMatrix.push([...initialDays, ...days]);
    calendarMatrix.push([...filledDays, ...remainingNulls]);
    return calendarMatrix;
};


interface CalendarProps {
    onData: (data: number | any) => void;
    items: string[];
    year: number;
    month: number;
    day: number;
    setDay: any;
    setMonth: any;
    setYear: any;
}

const Calendar: React.FC<CalendarProps> = ({ year, month, day, setDay, setMonth, setYear, onData, items  }) => {
    // const [day, setDay] = useState<number |any | undefined>(undefined);

    const matrix = generateCalendarMatrix(year, month);

      const handleButtonClick = (index: number) => {
        onData(index);  // Call parent function with the index
        setMonth(month)
        setYear(year)

      };

    // console.log(year, month, "Year")
    // console.log(matrix, "Year2")

    // const selectDate = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(day,month, year, "FullDate")
    //     console.log(setDay,setMonth, setYear, "FullDate2")
    //     setDay(day)
    //     setMonth(month)
    //     setYear(year)
    // };


    return (
        <div className="calendar ">
            <div className="calendar-header flex">
                <div className="calendar-day">S</div>
                <div className="calendar-day">M</div>
                <div className="calendar-day">T</div>
                <div className="calendar-day">W</div>
                <div className="calendar-day">T</div>
                <div className="calendar-day">F</div>
                <div className="calendar-day">S</div>
            </div>
            {matrix.map((week, i) => (
                <div key={i} className="calendar-week">
                    {week.map((day, j) => (

                        <button key={j} className={`calendar-day-cell ${day ? 'hover:bg-orange-300 ' : 'empty '}`}
                            onClick={()=> {
                                
                                // setEndDay(day)
                                //  setMonth(month)
                                //  setYear(year)
                                // setDay(day)
                                // setInputValue(day)
                                // sendDataToParent;
                                handleButtonClick(j) 
                            }}
                            disabled={day === null}
                        >

                            {day || 'X'}
                        </button>
                        

                    ), 
                    // console.log(sendDataToParent, 'inputValue')
                    )}
                </div>
            ))}
        </div>
    );
};

export default Calendar;
