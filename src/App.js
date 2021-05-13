import React, { Fragment }  from 'react';
import './App.css';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Container disableGutters={true}>

        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
              <Tabs centered="true" value={location.pathname}>
                <Tab label="Home" component={Link} to="/" />
                <Tab
                  label="Blog"
                  href="#basic-tabs"
                  component={Link}
                  to="/blog"
                />
                <Tab label="Contact" component={Link} to="/contact" />
              </Tabs>
              <Switch>
                <Route path="/contact" render={Contact} />
                <Route path="/blog" render={Blog} />
                <Route path="/" render={Home} />
              </Switch>
            </Fragment>
          )}
        />
        </Container>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
