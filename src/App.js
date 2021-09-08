import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/notFound/NotFound";
import Projects from "./components/projects/Projects";
import Project from "./components/project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App__content">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} exact />
          <Route path="/projects/:name" component={Project} />
          {/* <Route path="/" exact render={() => <Home />} /> */}
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
