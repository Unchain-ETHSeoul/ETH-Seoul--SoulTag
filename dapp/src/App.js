import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import HostPage from './pages/HostPage';
import ClientPage from './pages/ClientPage';
import UiPage from './pages/UiPage';

import TestPage from './pages/TestPage';

import Navbar from './components/Elements/Navbar';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';;

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UiPage />} />
          {/* <Route path="/host" element={<HostPage />} />
          <Route path="/client" element={<ClientPage />} />
          <Route path="/test" element={<TestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
