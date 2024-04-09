import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./components/views/signIn";
import Home from "./components/views/home";
import Header from "./components/widgets/header";
import SignUp from "./components/views/signUp";

function App() {
  return (
    <BrowserRouter>
    <div className=" app">
      <div className="header"><Header /></div>
      <div className="body">
         <div className="activity-pages">
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
         </div>

         <div className="auth">
           <Routes>
              <Route path="/sign-in" element ={<SigIn />} />
              <Route path="/sign-up" element ={<SignUp />} />
           </Routes>
         </div>
      </div>
      <div className="footer"></div>
    </div>
    </BrowserRouter>
  );
}

export default App;
