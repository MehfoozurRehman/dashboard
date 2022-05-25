export default function InputText(props) {
  return (
    <div className="input__box">
      <label htmlFor={props.placeholder} className="input__box__label">
        {props.placeholder}
      </label>
      <input className="input__box__field" {...props} />
    </div>
  );
}
