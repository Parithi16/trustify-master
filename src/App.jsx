import Header from "@/components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <div className="dark:bg-black h-full font-poppins">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
