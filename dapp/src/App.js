import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from './pages/MainPage';
import H0stPage from './pages/H0stPage';
import HostPage from './pages/HostPage';
import PartiPage from './pages/PartiPage';
import WalletPage from './pages/WalletPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */} 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/h0st" element={<H0stPage />} />
          <Route path="/host" element={<HostPage />} />
          <Route path="/partici" element={<PartiPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          {/* <Route path="/client" element={<ClientPage />} /> */}
          {/* <Route path="/test" element={<TestPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
