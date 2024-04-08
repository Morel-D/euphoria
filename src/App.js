import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/home";
import SigIn from "./components/views/signIn";
import Header from "./components/widgets/header";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="header"><Header /></div>
      <div className="body">
         <div className="activity-pages">

         </div>

         <div className="auth">
           <Routes>
              <Route path="/sign-in" element ={<SigIn />} />
           </Routes>
         </div>
      </div>
      <div className="footer"></div>
    </div>
    </BrowserRouter>
  );
}

export default App;
