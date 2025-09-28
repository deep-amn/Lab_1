import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import Organization from './components/organization/organization.tsx';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <main>
        <section id="employees">
          <h2>Employees</h2>
          <EmployeeList />
        </section>

        <section id="organization">
          <h2>Organization</h2>
          <Organization />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
