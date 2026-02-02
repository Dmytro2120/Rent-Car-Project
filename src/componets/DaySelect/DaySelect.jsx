import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useEffect, useId, useRef, useState } from "react";
import { format, isValid, parse } from "date-fns";
import "./DaySelect.css";

export const DaySelect = ({ onChange }) => {
  const dialogRef = useRef(null);
  const dialogId = useId();
  const headerId = useId();
  const [month, setMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(undefined);

  const [inputValue, setInputValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  useEffect(() => {
    const handleBodyScroll = (isOpen) => {
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    if (!dialogRef.current) return;
    if (isDialogOpen) {
      handleBodyScroll(true);
      dialogRef.current.showModal();
    } else {
      handleBodyScroll(false);
      dialogRef.current.close();
    }
    return () => {
      handleBodyScroll(false);
    };
  }, [isDialogOpen]);

  const handleDayPickerSelect = (date) => {
    onChange(date)
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "dd-MM-yyyy"));
    }
    dialogRef.current?.close();
  };

  const handleInputChange = (e) => {

    setInputValue(e.target.value);
    const parsedDate = parse(e.target.value, "dd-MM-yyyy", new Date());

    if (isValid(parsedDate)) {
      setSelectedDate(parsedDate);
      setMonth(parsedDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="select-date-picker">
      <input
        className="select-date-input"
        id="date-input"
        type="text"
        value={inputValue}
        placeholder="Select your date"
        onChange={handleInputChange}
      />
      <button
        className="select-date-button"
        onClick={toggleDialog}
        aria-controls="dialog"
        aria-haspopup="dialog"
        aria-expanded={isDialogOpen}
        aria-label="Open calendar to choose booking date"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
          width="1em"
          height="1em"
          fill="none"
        >
          <path
            fill="#1A202C"
            stroke="#1A202C"
            strokeWidth={0.5}
            d="M7 9.8a1.59 1.59 0 0 1-1.126-.467L2.071 5.53a.44.44 0 0 1 0-.619.44.44 0 0 1 .618 0l3.804 3.804c.28.28.735.28 1.015 0L11.31 4.91a.44.44 0 0 1 .618 0c.17.17.17.45 0 .619L8.126 9.333A1.59 1.59 0 0 1 7 9.8Z"
          />
        </svg>
      </button>
      <dialog
        role="dialog"
        ref={dialogRef}
        id={dialogId}
        aria-modal
        aria-labelledby={headerId}
        onClose={() => setIsDialogOpen(false)}
      >
        <DayPicker
          month={month}
          onMonthChange={setMonth}
          autoFocus
          mode="single"
          selected={selectedDate}
          onSelect={handleDayPickerSelect}
          footer={
            selectedDate !== undefined &&
            `Selected: ${selectedDate.toDateString()}`
          }
        />
      </dialog>
    </div>
  );
};
