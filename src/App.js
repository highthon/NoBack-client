import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Main3 from "./pages/Main3";
import Look from "./pages/Look";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Main3 />} />
          <Route path="/look" element={<Look />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
