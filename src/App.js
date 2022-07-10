import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar title ="Textutils" about="about us"/>
    <Alert alert='welcome to the site'/>
    <div className="container my-3">
      <TextForm heading="welcome"/>
    {/* <Routes>
          <Route exact path="/" element={<TextForm/>}/>
          <Route exact path="/about" element={<About/>}/>
    </Routes> */}
     {/* <Switch>
          <Route path="/about">
            <About heading="About us"/>
          </Route>
          <Route path="/">
          <TextForm heading="Welcome"/>
          </Route>
    </Switch> */}
    </div> 
    {/* </Router> */}
    
    </>
  );
}

export default App;
