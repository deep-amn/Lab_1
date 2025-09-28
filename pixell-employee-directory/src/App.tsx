import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import Organization from "./components/organization/organization";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="*" element={<EmployeeList />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
