import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import AsyncAwait from "./demos/AsyncAwait";
import DynamicForm from "./demos/DynamicForm";
import Focus17DynamicForm from "./demos/Focus17DynamicForm";
import FocusDynamicForm from "./demos/FocusDynamicForm";

import "./App.css";

const Links = () => {
  return (
    <div className="links">
      <div className="container">
        <NavLink to="/async-await">
          Пример с async await
        </NavLink>
      </div>
      <div className="container">
        <NavLink to="/form">
          Пример с form
        </NavLink>
      </div>
      <div className="container">
        <NavLink to="/focus-form">
          Пример с focus form
        </NavLink>
      </div>
      <div className="container">
        <NavLink to="/focus-form-flush">
          Пример с focus form flush
        </NavLink>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<Links />} />
          <Route path="/async-await" element={<AsyncAwait />} />
          <Route path="/form" element={<DynamicForm />} />
          <Route path="/focus-form" element={<Focus17DynamicForm />} />
          <Route path="/focus-form-flush" element={<FocusDynamicForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
