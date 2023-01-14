import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Look from "./pages/Look";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/look" element={<Look />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
