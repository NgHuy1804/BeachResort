import "./App.css";

// import react-router-dom
import { Route, Switch } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import About from "../Pages/about";
import Login from "../Pages/login";
import SingleRoom from "../Pages/SingleRoom";
import Error from "../Pages/Error";

// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/about/" component={About} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/login/" component={Login} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
