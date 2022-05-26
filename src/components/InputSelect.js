import Select from "react-select";

export default function InputSelect(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder} className="input__box__label">
        {props.placeholder}
      </label>
      <Select options={props.options} {...props} />
    </div>
  );
}
