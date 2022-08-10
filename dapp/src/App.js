import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import HostPage from './pages/HostPage';
import ClientPage from './pages/ClientPage';
import WalletPage from './pages/WalletPage';
//import UiPage from './pages/UiPage';
import ParticiPage from './pages/Participage';

import TestPage from './pages/TestPage';

import Navbar from './components/Elements/Navbar';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';;

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */} 
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} /> {/* init */}
          <Route exact path="/host" element={<HostPage />} /> 
          <Route exact path="/client" element={<ClientPage />} /> {/* modal or another page */}
          <Route exact path="/partici" element={<ParticiPage />} /> {/* init */}
          <Route exact path="/wallet" element={<WalletPage />} /> {/* init */}
          {/* <Route exact path="/test" element={<TestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
