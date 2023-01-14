import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Look from "./pages/Look";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";
import HabitTest from "./pages/HabitTest";
import HT2 from "./pages/HabitTest/HT2";
import HT3 from "./pages/HabitTest/HT3";
import TestResult from "./pages/TestResult";
import HT4 from "./pages/HabitTest/HT4";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/look" element={<Look />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/test" element={<HabitTest />} />
          <Route path="/test2" element={<HT2 />} />
          <Route path="/test3" element={<HT3 />} />
          <Route path="/test4" element={<HT4 />} />
          <Route path="/result" element={<TestResult />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
