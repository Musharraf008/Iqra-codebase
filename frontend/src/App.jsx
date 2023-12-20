import "./App.css";

import AdmissionForm from "./pages/admission-form/AdmissionForm";
import PayFee from "./pages/pay-fee/PayFee";
import Root from "./Root";
import Students from "./pages/students/Students";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/pay-fee" element={<PayFee />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
