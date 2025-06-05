import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "./Layouts/AuthLayout";
import OnboardingSlider from "./pages/OnboardingSlider";
import Login from "./pages/auths/Login";
import Register from "./pages/auths/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<OnboardingSlider />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
