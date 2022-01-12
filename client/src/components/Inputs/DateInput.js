import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { getFullDate, getTodayDate } from '../../utils/helpers';
import { handleDateInfo } from '../../redux/actions/formActions';

const DateInput = () => {
  const dispatch = useDispatch();
  const { createdAt } = useSelector((state) => state.formReducer);
  const [startDate, setStartDate] = useState(getFullDate(createdAt));

  useEffect(() => {
    setStartDate(getFullDate(createdAt));
  }, [createdAt]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        dispatch(handleDateInfo(getTodayDate(date), 'createdAt'));
      }}
      id='date'
      className='input'
    />
  );
};

export default DateInput;

// input text date test working but not perfect
// import React, { useState } from 'react';
// import { getTodayDate, checkValidDate } from '../../utils/helpers';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { handleDateInfo } from '../../redux/actions/formActions';

// const DateInput = () => {
//   const dispatch = useDispatch();
//   const today = getTodayDate();
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(false);

//   const handleChange = (e) => {
//     setDate(e.target.value);
//     if (e.target.value.length === 10) {
//       const inputDate = checkValidDate(e.target.value);
//       if (inputDate === 'error') {
//         setError(true);
//       } else {
//         setError(false);
//         setDate(inputDate);
//         dispatch(handleDateInfo(inputDate));
//       }
//     }
//   };

//   return (
//     <input
//       type="text"
//       name="date"
//       id="date"
//       placeholder={today}
//       onChange={handleChange}
//       value={date}
//       className={error ? 'error' : null}
//     />
//   );
// };
