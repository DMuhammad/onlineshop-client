import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./css/style.css";
import ThemeProvider from "./utils/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
