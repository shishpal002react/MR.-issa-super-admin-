import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../pages/Dashboard/Contacts";

export const DashboardRoutes = () => {
  return <Routes>
    <Route path="/dashboard/contacts" element={<Contacts />} />
  </Routes>;
};
