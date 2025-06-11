import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./Layouts/AuthLayout";
import OnboardingSlider from "./pages/OnboardingSlider";
import Login from "./pages/auths/Login";
import Register from "./pages/auths/Register";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./Layouts/AppLayout";
import Transactions from "./pages/Transactions";
import Budget from "./pages/Budget";
import RecurringBill from "./pages/RecurringBill";
import Pot from "./pages/Pot";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<OnboardingSlider />} />

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/budgets" element={<Budget />} />
            <Route path="/pots" element={<Pot />} />
            <Route path="/recurringbills" element={<RecurringBill />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
