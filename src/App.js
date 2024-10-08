import RegistrationForm from "./components/Forms/RegistrationForm/RegistrationForm";
import './App.css';
import Boxcard from './components/Box-card';
import LoginForm from './components/Forms/LoginForm/LoginForm'
import { Routes,Route } from "react-router-dom";
import Navbar from "./components/widgets/Navbar";
import UserProfileCard from "./components/widgets/UserProfileCard";
import MyProfile from "./components/widgets/MyProfileCard";
import ContractCard from "./components/widgets/ContractCard";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Boxcard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
        <Route path='/contract' element={<ContractCard/>}/>
        <Route path='/home' element={<HomePage/>}/>
}
  </Routes>

      {/*<Navbar/> <MyProfile/>*/}
      {/*<UserProfileCard/>*/}
      
    </div>
  );
}

export default App;
