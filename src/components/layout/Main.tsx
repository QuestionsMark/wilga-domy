import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../../views/about-us/AboutUs";
import { Concept } from "../../views/concept/Concept";
import { Investment } from "../../views/investment/Investment";
import { NotFound } from "../../views/not-found/NotFound";
import { SalesOffice } from "../../views/sales-office/SalesOffice";
import { Visualisation } from "../../views/visualisation/Visualisation";

export const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Investment />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/concept" element={<Concept />} />
            <Route path="/visualisation" element={<Visualisation />} />
            <Route path="/sales-office" element={<SalesOffice />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};