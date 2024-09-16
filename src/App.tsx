import React, { useState, useEffect  } from 'react';
import Modal from './components/Modal';
import './App.css';
import Calendar from './components/Calendar';


const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const monthInName = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth();

    const [month, setMonth] = useState<number | any | undefined>(currentDate.getMonth());
    const [year, setYear] = useState<number | any | undefined>(currentDate.getFullYear());
    const [day, setDay] = useState<number | any | undefined>(null);


    // const [day, setDay] = useState<number | any | undefined>(null);

    const [startDay, setStartDay] = useState<number | null>(null);
    const [startMonth, setStartMonth] = useState<number | null |any>(null);
    const [startYear, setStartYear] = useState<number | null | any>(0);

    const [endDay, setEndDay] = useState<number | null>(null);
    const [endMonth, setEndMonth] = useState<number | null | any>("MM");
    const [endYear, setEndYear] = useState<number | null |any>(0);
    const [yearArray, setyearArray] = useState<any>([2024, 2025, 2026] );

    

    const handleChildDataC = (index: number) => {
        setStartDay(index+1);
        setStartMonth(month);
        setStartYear(year);
      };

      const handleChildDataC2 = (index: number) => {
        setEndDay(index+1);
        setEndMonth(month);
        setEndYear(year);

        // if(startYear < endYear) {
        //     setEndYear(year);
        // }
        // else {
        //     setEndYear(null);

        // }
      };

      const items = ['Item 1', 'Item 2', 'Item 3'];


    
   


    // console.log("currentDate", currentDate);
    // console.log("currentDate1", year);
    // console.log("currentDate2", month);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const getNextMonth = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMonth(month === 11 ? 0 : month + 1);
        if (month === 11) {
            setYear(year + 1)
        }
        if (month === 12){
            setYear(year + 1)
        }

        // togetYear();
        // setYear(month === 11 ? 0 : year + 1)

    };


    const getPrevMonth = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMonth(month === 0 ? 11 : month - 1);
        if (month === 0) {
            setYear(year - 1)
        }
        // togetYear();

        // setYear(month === 11 ? 0 : year -    1)

    };

    const buttonReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        setDay(null);
        setStartDay(null);
        setStartMonth(null);
        setStartYear(null);
        setEndDay(null);
        setEndMonth(null);
        setEndYear(null);
    };

    const todayDate = (event: React.MouseEvent<HTMLButtonElement>) => {        
        setStartDay(currentDate.getDate());
        setStartMonth(currentDate.getMonth());
        setStartYear(currentDate.getFullYear());
        setEndDay(currentDate.getDate());
        setEndMonth(currentDate.getMonth());
        setEndYear(currentDate.getFullYear());
        setIsModalOpen(false)
    };


      const getLastNumberOfDay = (value: number) => {
        const lastNumberOfDays: Date[] = [];
        // const today = new Date(); // Get current date
        
        // Loop to get the last n number of days
        for (let i = 0; i < value; i++) {
          const day = new Date(currentDate); // Create a new date object for each iteration
          day.setDate(currentDate.getDate() - i); // Subtract i days from today
          lastNumberOfDays.push(day);
        }

        const totalArrayLength = lastNumberOfDays.length;
        const lastIndex = totalArrayLength-1;

        setStartDay(lastNumberOfDays[0].getDate());
        setStartMonth(lastNumberOfDays[0].getMonth());
        setStartYear(lastNumberOfDays[0].getFullYear());
        setEndDay(lastNumberOfDays[lastIndex].getDate());
        setEndMonth(lastNumberOfDays[lastIndex].getMonth());
        setEndYear(lastNumberOfDays[lastIndex].getFullYear());
        setIsModalOpen(false)
      };


      useEffect(() => {
       

            const dropDownYearArray: number[] = [];
        // const today = new Date(); // Get current date
         const currentYear = currentDate.getFullYear()
        // Loop to get the last n number of days
        for (let i = currentYear - 100; i <= currentYear + 100; i++) {
        //   const year = currentDate.getFullYear() // Create a new date object for each iteration
        //   year.push(i);

          dropDownYearArray.push(i);
        }
        // console.log(dropDownYearArray, 'i')

            setyearArray(dropDownYearArray)
       
      }, [currentDate.getDate()]); // Empty dependency array


    //   console.log(yearArray, 'yearArray')


      

  

  const selectMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const selectYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

 



    return (
        <div className="App">  
            <h2 className='text-5xl text-center text-blue-600'>Calendar in TypeScript</h2>
            {/* <input type="date" placeholder="Select date"/> */}
            <input
            className='border-2  border-black-600 w-64 rounded mt-8 '
                type="text"
                placeholder="DD/MM/YYYY - DD/MM/YYYY"
                onClick={openModal}
                value={startDay === null  ? '' 
                    : startDay != null && endDay === null ? `${startDay} ${'/'} ${startMonth+1} ${'/'} ${startYear}  -   ${'DD'} ${'/'} ${'MM'} ${'/'} ${'YYYY'}`
                    : startDay != null && endDay != null ? `${startDay} ${'/'} ${startMonth+1} ${'/'} ${startYear}  -   ${endDay} ${'/'} ${endMonth+1} ${'/'} ${endYear}`
                    :  `${startDay} ${'/'} ${startMonth+1} ${'/'} ${startYear}  -   ${endDay} ${'/'} ${endMonth+1} ${'/'} ${endYear}`
                }

                // value={day === null ? '' : `${startDay} ${'/'} ${startMonth} ${'/'} ${startYear}  -   ${endDay} ${'/'} ${endMonth} ${'/'} ${endYear}`}
            />

                <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex justify-between'>
                <button onClick={buttonReset}>Reset</button>
                    <div className="close flex justify-end -mt-4" onClick={closeModal}>&times;</div>
                </div>

                <div className='flex lg:flex-row flex-col lg:space-x-10 flex-col '>
                    <div >
                        <div className='flex justify-between items-center'>
                            {/* prev */}
                            <button className='arrow' onClick={getPrevMonth} >&lt;</button> 
                            {/* <div>{year}</div> */}
                        

                            <select className=" w-20" value={year} onChange={selectYear}>
                                {/* <option value="">Select an item</option> Default empty option */}
                                {yearArray.map((years : any, index: any) => (
                                    <option key={index} value={years}>
                                        {years}
                                    </option>
                                ))}
                            </select>

                            <select value={month} onChange={selectMonth}>
                                {/* <option value="">Select an item</option> Default empty option */}
                                {monthInName.map((months, index) => (
                                    <option key={index} value={index}>
                                        {months}
                                    </option>
                                ))}
                            </select>
                            {/* <div>{monthInName[month]}
                            </div> */}
                            {/* next */}
                            <button className='arrow' onClick={getNextMonth}>&gt;</button>
                        </div>
                        <Calendar onData={handleChildDataC} items={items} year={year} month={month} day={day} setDay={setDay} setMonth={setMonth} setYear={setYear} />
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <button className='arrow' onClick={getPrevMonth} >&lt;</button>

                            <div>{year}</div>
                            <div>{monthInName[month]}
                                {/* <div>{month === 11 ? year+1 : year}</div>
                        <div>{monthInName[month === 11 ? 0 : month+1]} */}
                                {/* {month === 11 ? 0 : month+1} */}
                            </div>

                            <button className='arrow' onClick={getNextMonth}>&gt;</button>
                        </div>
                        <Calendar onData={handleChildDataC2} items={items} year={startYear ? startYear : year} month={startMonth ? startMonth : month} day={startDay ? startDay : day} setDay={setDay} setMonth={setMonth} setYear={setYear} />
                    </div>
                </div>

                <div className='flex font-semibold space-x-10 pt-4 text-violet-500 '>
                    <button className='hover:text-red-600 ' onClick={todayDate}>
                        Today
                    </button>
                    <button className='hover:text-red-600' 
                    onClick={()=> {
                        getLastNumberOfDay(7) 
                            }}>
                        Last 7 days
                    </button>
                    <button className='hover:text-red-600'
                    onClick={()=> {
                        getLastNumberOfDay(30) 
                            }}>
                        Last 30 days
                    </button>
                    
                   
                </div>
            </Modal>
        </div>
    );
};

export default App;
