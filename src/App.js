import Components from "components/Components";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import { InputDate } from "components";
import InputSelect from "components/InputSelect";
import { Grid } from "react-feather";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="login__contianer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            nesciunt a, ea vel quisquam sint ipsum molestias rem enim quas
            explicabo ipsam laudantium voluptatibus dignissimos nam deserunt
            ipsa nulla ut quaerat in pariatur. Molestiae eveniet iusto
            voluptatem quo blanditiis placeat, porro alias et odio laboriosam
            rem tempore obcaecati dolore eos recusandae doloribus sed eum omnis
            similique reiciendis temporibus atque voluptas! Ducimus, mollitia
            aliquid. Nobis laborum reprehenderit unde exercitationem officiis
            impedit, minima ratione aut dicta odit eum minus quos vero ipsam ad
            fugit consequatur aspernatur ducimus, voluptatem delectus quisquam
            assumenda! Illo error corrupti, recusandae aut pariatur explicabo
            rerum hic voluptas, reiciendis facere ut id expedita laudantium modi
            corporis quaerat maiores maxime temporibus eius optio. Unde
            praesentium mollitia vero saepe non soluta neque magnam deserunt
            reiciendis vel culpa, ea eaque maiores nemo deleniti porro alias
            quibusdam fuga nulla cum voluptas, at rerum, ipsa voluptates! Facere
            veritatis itaque molestias quam deserunt nesciunt illo quod amet
            similique at minima quaerat cupiditate, distinctio magni velit rerum
            quis ipsam excepturi, eligendi reiciendis voluptate placeat est.
            Nobis voluptas architecto ipsam sit labore ullam neque deserunt et,
            nostrum doloremque? Atque repellendus ut autem nam consequatur vel
            quam ea, ullam temporibus et voluptatem praesentium. Ad ipsum
            accusantium excepturi sint?
          </div>
        }
      />
      <Route
        path="/dashboard"
        element={
          <div className="container">
            <Sidebar />
            <div className="container__main">
              <Header />
              <Main />
            </div>
          </div>
        }
      >
        <Route path="" element={<Components />} />
        <Route path="table" element={<Table />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
function Table() {
  const [range, onRangeChange] = useState([new Date(), new Date()]);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div className="container__main__content__heading">
        <Grid size={30} strokeWidth={1.5} color="currentColor" />
        Table name
      </div>
      <div className="container__main__content__top">
        <div className="container__main__content__top__left">
          <input
            type="text"
            placeholder="Search"
            className="input__box__field input__box__search"
          />
        </div>
        <div className="container__main__content__top__right">
          <InputDate
            placeholder="hello"
            onChange={onRangeChange}
            value={range}
            range={true}
            style={{ marginRight: "1em" }}
          />
          <InputSelect placeholder="hello" options={options} />
        </div>
      </div>
      <div className="container__main__content__table">
        <div className="container__main__content__table__header">
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
          <div className="container__main__content__table__header__entry">
            hello
          </div>
        </div>
        <div className="container__main__content__table__content"></div>
      </div>
    </>
  );
}
