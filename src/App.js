
import Register  from "./components/Register"
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pagination from "./components/Pagination";
import ScrollToTop from "./components/ScrollToTop";
import Moderator from "./components/controls/Moderator";
// import Admin from "./components/controls/Admin";
// import User from "./components/controls/User";
import Dashboard from "./components/controls/Dashboard";
import axios from "axios";
import { useEffect } from "react";
import User from "./components/controls/User";
import Success from "./components/controls/Success";
import Unknown from "./components/Unknown";
import Forgot from "./components/controls/userpages/Forgot";
import Superuser from "./components/controls/tables/control/Superuser";
import Manager from "./components/controls/tables/control/main/Manager";
import Reg from "./components/controls/tables/control/main/Reg";
import Create from "./components/controls/tables/control/main/Create";
import Navigation from "./components/Navigation";
import Edit from "./components/controls/tables/control/main/Edit";
import Signin from "./components/controls/tables/control/main/Signin";




const App = () => {


  return (
    
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
         <Route index element={<Pagination/>}  exact/>
        <Route path="login" element = {<Login/>} exact />
        <Route path="register" element = {<Register/>} exact />
        <Route path="dashboard" element={<Dashboard />} exact />
          <Route path="user" element={<User />} exact />
          <Route path="register/success" element={<Success />} exact />
          <Route path="login/forgot" element={<Forgot />} exact />
          <Route path = "*"element={<Unknown />} exact />
          <Route path="Navigation" element={<Navigation />} exact />
          <Route path="signin" element={<Signin />} exact />
          
          
          
      
        
        
        
        <Route path="moderator" element = {<Moderator/>} exact />
          <Route path="administrator" element={<Manager />} exact />
          <Route path="reg" element={<Create />} exact />
          <Route path="edit/:id" element={<Edit />} exact />
          
        {/* <Route path="admin" element = {<Admin/>} exact />
        <Route path="user" element = {<User/>} exact /> */}

        </Routes>
        </ScrollToTop>
      </BrowserRouter>
  
  );
}

export default App;
