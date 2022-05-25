import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function InputTextMulti(props) {
  return (
    <div className="input__box input__box__textarea">
      <label htmlFor={props.placeholder} className="input__box__label">
        {props.placeholder}
      </label>
      <CKEditor editor={ClassicEditor} {...props} />
    </div>
  );
}
