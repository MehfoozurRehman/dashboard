export default function InputTime(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder} className="input__box__label">
        {props.placeholder}
      </label>
      <input type="time" className="input__box__field" {...props} />
    </div>
  );
}
