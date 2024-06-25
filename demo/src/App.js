import './App.css';
import Aadhar from './Compenent/Aadhar';
import Account from './Compenent/Account';
import Login from './Compenent/Login';
import MainPage from './Compenent/MainPage';
import Manegment from './Compenent/Manegment';
import Registration from './Compenent/Registration';
import { Routes, Route } from "react-router-dom"
import Service from './Compenent/Service';
import Passbook from './Compenent/Passbook';
import Help from './Compenent/Help';
import Header from './Compenent/Header';
import Slide from './Compenent/Slide';
import Footer from './Compenent/Footer';
function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Registration />} ></Route>
        <Route path="add" element={<Login />} />
        <Route path="panel" element={<Aadhar />} />
        <Route path="Excess" element={<MainPage />} />
        <Route path="account" element={<Account />} />
        <Route path="account" element={<MainPage />} />
        <Route path="service" element={<Service />} />
        <Route path="btn" element={<Passbook />} />
        <Route path="help" element={<Help />} />
      </Routes>

      <Slide />
      <Footer />

    </>
  );
}

export default App;
