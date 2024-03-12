// src/components/App.jsx
import React from 'react'; 
import Header from './Header/Header'; 
import Main from './Main/Main';
import EmployeeCards from './EmploeeCards/EmployeeCards';
import SignUpForm  from './Form/SignUpForm'; 

export const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <EmployeeCards/>
      <SignUpForm />
    </div>
  );
};

export default App;