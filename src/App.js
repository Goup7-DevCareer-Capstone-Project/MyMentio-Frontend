import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SuccessfulReset from "./pages/SuccessfulReset";
import PasswordConfirmationPage from "./pages/PasswordConfirmationPage";
import OTPPage from "./pages/OTPPage";
import VerificationPage from "./pages/VerificationPage";
import PasswordReset from "./pages/PasswordReset";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-password-confirmation-page":
        title = "";
        metaDescription = "";
        break;
      case "/otp-page":
        title = "";
        metaDescription = "";
        break;
      case "/verification-page":
        title = "";
        metaDescription = "";
        break;
      case "/password-reset":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SuccessfulReset />} />
      <Route
        path="/-password-confirmation-page"
        element={<PasswordConfirmationPage />}
      />
      <Route path="/otp-page" element={<OTPPage />} />
      <Route path="/verification-page" element={<VerificationPage />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/sign-up-page" element={<SignUpPage />} />
    </Routes>
  );
}
export default App;
