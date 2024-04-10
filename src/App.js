import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import PayerForm from "./Pages/PayerForm/PayerForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payerform" element={<PayerForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
