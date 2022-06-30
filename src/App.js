
import Register  from "./components/Register"
import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pagination from "./components/Pagination";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./components/controls/Dashboard";
import Success from "./components/controls/Success";
import Unknown from "./components/Unknown";
import Forgot from "./components/controls/userpages/Forgot";
import Manager from "./components/controls/tables/control/main/Manager";
import Edit from "./components/controls/tables/control/main/Edit";
import Signin from "./components/controls/tables/control/main/Signin";
import Recovery from "./components/controls/userpages/Recovery";
import Recovered from "./components/controls/userpages/Recovered";
import User from "./components/controls/User";
import Active from "./components/controls/Active";
import Payment from "./components/Payment/Payment";




const App = () => {


  return (
    
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
         <Route index element={<Pagination/>}  exact/>
        <Route path="login" element = {<Login/>} exact />
        <Route path="register" element = {<Register/>} exact />
        <Route path="dashboard" element={<Dashboard />} exact />
          <Route path="register/success" element={<Success />} exact />
          <Route path="login/forgot" element={<Forgot />} exact />
          <Route path = "*"element={<Unknown />} exact />
          <Route path="signin" element={<Signin />} exact />
          <Route path="recovery/:id" element={<Recovery />} exact />

          <Route path="administrator" element={<Manager />} exact />
          <Route path="recovery/recovered" element={<Recovered />} exact />
          <Route path="edit/:id" element={<Edit />} exact />
          <Route path="user" element={<User />} exact />
          <Route path="active" element={<Active />} exact />
          {/* <Route path="payment" element={<Payment />} exact /> */}
          
      

        </Routes>
        </ScrollToTop>
      </BrowserRouter>
  
  );
}

export default App;
