import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import DatePicker from "react-date-picker";

export default function InputDate(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder} className="input__box__label">
        {props.placeholder}
      </label>
      {props.range ? (
        <DateRangePicker {...props} calendarIcon={null} clearIcon={null} />
      ) : (
        <DatePicker {...props} calendarIcon={null} clearIcon={null} />
      )}
    </div>
  );
}
