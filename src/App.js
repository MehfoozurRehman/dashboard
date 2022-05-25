import Components from "components/Components";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

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
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
function Settings() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facilis
      recusandae corrupti alias quae provident facere rem, quasi nesciunt
      doloribus enim aliquid tempore est amet perferendis vitae, dolorum eaque
      voluptates nulla earum, sapiente unde dolore? Temporibus tempore deserunt,
      illum nesciunt in unde eligendi ex ea possimus nisi quas debitis
      perferendis expedita exercitationem cumque aliquam illo fuga excepturi non
      vel tenetur ullam. Voluptatem deleniti iure, labore enim neque dolore
      earum! Ea, maxime rerum ipsa unde temporibus nesciunt officia dolores.
      Quos alias unde dolorum reiciendis facilis ducimus velit ratione ea
      sapiente! A reiciendis obcaecati quia aut praesentium suscipit consectetur
      sint ipsam corrupti blanditiis nemo ducimus sed consequuntur, accusantium
      quis temporibus ad fuga in eaque iure minima? Veritatis mollitia,
      consequuntur fugiat, quo alias incidunt harum repellat earum
      exercitationem ut vitae, doloremque magnam. Laudantium, labore ducimus.
      Harum numquam, id ex accusamus impedit labore sunt? Cum vitae labore quos
      aliquam laborum voluptatibus magni rem aspernatur? Error, excepturi facere
      quae dolor reiciendis corporis cupiditate voluptatum ad consectetur quis
      culpa iure similique commodi molestias provident neque ea magnam dolorem
      magni? Ratione voluptatum doloribus quisquam aut ab qui explicabo
      recusandae accusantium. Repellat doloribus dolorem iste numquam veritatis
      voluptatum, perspiciatis aspernatur consequuntur omnis distinctio quisquam
      est dicta excepturi nisi, officia deleniti porro corporis debitis dolorum
      obcaecati explicabo ipsa sed praesentium! Possimus quos veniam facere
      aperiam quam repudiandae quas unde voluptatum reiciendis laboriosam harum
      libero ratione consequuntur excepturi illum earum, similique, nam cumque.
      Doloribus corrupti nobis in excepturi natus eum. Omnis, possimus deleniti
      ipsa non quasi modi alias laborum, dicta asperiores hic molestias maxime
      fugit voluptas at magnam aspernatur cupiditate? Ex a nulla cumque eligendi
      laboriosam, aut, cum hic adipisci earum molestiae dignissimos labore
      sapiente necessitatibus quis, natus nesciunt? Dolores voluptatibus soluta
      eum alias! Eaque magni labore cumque repellat saepe totam error
      voluptatibus ratione dolorem obcaecati asperiores, aut consequuntur? Ipsa
      animi error natus quas nobis veritatis ad reprehenderit optio consequatur
      architecto omnis expedita nulla earum cupiditate, sit est quod minus
      facere explicabo voluptatem magnam distinctio aperiam doloremque! Ullam
      iure laborum optio possimus, adipisci reiciendis perferendis, hic nisi
      numquam maiores dolorum animi alias sed tempora laboriosam et eveniet
      quidem? Itaque vel, unde, sequi ea ipsam ipsa placeat sapiente sed
      quisquam eum est, doloribus nihil consequatur esse debitis perspiciatis ad
      molestiae voluptatibus tempora minima? Saepe, aperiam mollitia ex
      inventore error consequatur neque, quo autem fugiat facere assumenda esse
      doloribus labore quam consectetur culpa quasi illo non vitae voluptate
      soluta quidem? Illum debitis reprehenderit ullam alias soluta nam
      doloremque mollitia quam quia dolores amet accusantium, recusandae
      pariatur saepe repellendus, quos voluptas sapiente quibusdam ad, tempore
      velit. Sunt ipsam, iure sed numquam, odit, cupiditate recusandae eligendi
      praesentium facilis itaque adipisci architecto? Ducimus iure adipisci
      nostrum omnis rerum! Aperiam ad, rerum a, magni eveniet asperiores quae
      sunt beatae cum autem ratione! Libero blanditiis cumque optio magni autem
      dignissimos velit quibusdam dolorum dolore harum obcaecati, doloremque
      atque odio aliquam esse, incidunt impedit pariatur quam asperiores!
      Sapiente molestiae earum nobis optio eveniet aut assumenda laudantium illo
      animi commodi atque placeat labore, sequi temporibus in. Eius, laudantium
      debitis.
    </div>
  );
}
