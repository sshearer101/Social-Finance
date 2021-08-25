import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';
// import Login from './components/Login';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/information")
      .then(res => res.json())
      //.then(data => console.log(setUserInfo(data)))
      .then(data => setUserInfo(data))
      //.then(data => console.log(data))
  }, [])

  function handleAddProfile(newUser) {
    const newUserArray = [newUser, ...userInfo];
    setUserInfo(newUserArray);
  }
  
  function enlistBots(id) {
    //console.log(id)
    setUserInfo(userInfo.map(user => user.id === id ? { ...user, enlisted: true } : user));
  }

  return (
    <>
      <Header />
      {/* <Login /> */}
      <FinanceForm  userInfo={userInfo} onAddProfile={handleAddProfile}/>
      <FinanceCard userInfo={userInfo.filter(user => user.enlisted)} userInfo={userInfo} onAddProfile={handleAddProfile} />
      <FinanceCard userInfo={userInfo} onAddProfile={handleAddProfile}/>
      
    </>
  );
}

export default App;
















  // const formData = data.map(formInfo => {
  //   return (
  //     <FinanceForm
  //       key={formInfo.id}
  //       name={formInfo.name}
  //       age={formInfo.age}
  //       income={formInfo.income}
  //       housing={formInfo.housing}
  //       living_expenses={formInfo.living_expenses}
  //       bills={formInfo.bills}
  //       entertainment={formInfo.entertainment}
  //     />
  //   )
  // });