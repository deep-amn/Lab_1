import React from "react";
import { Routes, Route } from "react-router-dom";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EmployeeList from "./components/EmployeeList";
import Organization from "./components/organization/organization";

const App: React.FC = () => {
  return (
    <>
      {/* Show only sign-in screen to guests */}
      <SignedOut>
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Please sign in to continue</h2>
          <SignInButton />
        </div>
      </SignedOut>

      {/* Full app ONLY for logged-in users */}
      <SignedIn>
        <div>
          <NavBar />

          {/* Add logout/user button to the nav */}
          <div style={{ position: "absolute", top: 10, right: 20 }}>
            <UserButton />
          </div>

          <main>
            <Routes>
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="*" element={<EmployeeList />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SignedIn>
    </>
  );
};

export default App;
