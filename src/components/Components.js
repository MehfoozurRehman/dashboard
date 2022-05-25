import React, { useState } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import {
  Button,
  ButtonTextIcon,
  ButtonIcon,
  InputText,
  InputDate,
  InputTime,
  InputTextMulti,
} from "components";

export default function Components() {
  const [value, onChange] = useState(new Date());
  const [range, onRangeChange] = useState([new Date(), new Date()]);
  return (
    <>
      <ButtonIcon
        icon={<ChevronsLeft size={20} color="currentColor" />}
        onClick={() => {
          console.log("eeeeeeeeeeeeeeeeeee");
        }}
      />
      <Button
        label="hello"
        onClick={() => {
          console.log("eeeeeeeeeeeeeeeeeee");
        }}
      />
      <ButtonTextIcon
        label="hello"
        icon={<ChevronsRight size={20} color="currentColor" />}
        onClick={() => {
          console.log("eeeeeeeeeeeeeeeeeee");
        }}
      />
      <InputText
        type="text"
        placeholder="hello"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <InputText
        type="text"
        autoFocus
        placeholder="oyukdfjlaksdjf"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <InputDate
        placeholder="hello"
        onChange={onRangeChange}
        value={range}
        range={true}
      />
      <InputDate
        placeholder="hello"
        onChange={onChange}
        value={value}
        range={false}
      />
      <InputTime
        placeholder="hello"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <InputTextMulti
        placeholder="hello"
        data="<p>Hello from CKEditor 5!</p>"
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor is ready to use!", editor);
        // }}
        // onChange={(event, editor) => {
        //   const data = editor.getData();
        //   console.log({ event, editor, data });
        // }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </>
  );
}
