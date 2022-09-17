import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Templates } from "./Pages/Templates/Templates";
import { Contact } from "./Pages/Contact/Contact";
import { Error } from "./Pages/Error/Error";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { CreateCV } from "./Pages/CreateCV/CreateCV";
import { Template1 } from "./Components/Templates/Template1/Template1";
import { Template2 } from "./Components/Templates/Template2/Template2";
import { Template3 } from "./Components/Templates/Template3/Template3";

export const App = () => {
  const urlPage = window.location.pathname;
  console.log('urlPage', urlPage);

  return (
    <BrowserRouter>
      {urlPage !== "/template1" && urlPage !== "/template2" && urlPage !== "/template3" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createcv" element={<CreateCV />} />
        <Route path="/template1" element={<Template1 />} />
        <Route path="/template2" element={<Template2 />} />
        <Route path="/template3" element={<Template3 />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {urlPage !== "/template1" && urlPage !== "/template2" && urlPage !== "/template3" && <Footer />}
    </BrowserRouter>
  );
};
