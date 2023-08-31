import React from "react";

import { Routes, Route} from "react-router-dom";
import { Index } from "./static/pages/Index";
import { Download } from "./static/pages/Download";
import { Conditions } from "./static/pages/Conditions";
import { AboutUs } from "./static/pages/AboutUs";
import { PrivacyPolicy } from "./static/pages/PrivacyPolicy";
import { Help } from "./static/pages/Help";
import i18next from "i18next";
import { useTranslation } from 'react-i18next'


function App() {
  const { t } = useTranslation();
  return (

    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/download" element={<Download/> } />
        <Route path="/conditions" element={<Conditions/>}/>
        <Route path="/about us" element={<AboutUs/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>}/> 
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
