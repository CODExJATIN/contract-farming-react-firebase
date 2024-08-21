import RegistrationForm from "./components/Forms/RegistrationForm/RegistrationForm";
import './App.css';
import Boxcard from './components/Box-card';
import LoginForm from './components/Forms/LoginForm/LoginForm'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Boxcard/>}/>
        <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
