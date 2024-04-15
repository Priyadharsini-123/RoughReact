import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComponent() {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDatePicker = () => {
    setShowDatePicker(prevState => !prevState);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowDatePicker(false); // Close the date picker after selecting a date
  };

  return (
    <div>
      <button onClick={toggleDatePicker}>Select Date</button>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
        />
      )}
    </div>
  );
}

export default DatePickerComponent;
