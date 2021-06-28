import React, { Fragment }  from 'react';
import './App.css';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import Tab from "@material-ui/core/Tab";
import Container from '@material-ui/core/Container';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Home from './components/Home/Home'

function App() {

  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //                value={location.pathname}

  return (
    <div className="App">
    <BrowserRouter>
      <TabContext value={value}>
        
          <Route
            path="/"
            render={({ location }) => (
              <Fragment>
                <TabList 
                  centered="true" 
                  onChange={handleChange}
                >
                  <Tab 
                    label="Home" 
                    component={Link} 
                    to="/" 
                    value="0"
                  />
                  <Tab 
                    label="Projects" 
                    component={Link} 
                    to="/projects" 
                    value="1"
                  />
                  <Tab
                    label="Blog"
                    href="#basic-tabs"
                    component={Link}
                    to="/blog"
                    value="2"
                  />
                  <Tab 
                    label="Contact" 
                    component={Link} 
                    to="/contact" 
                    value="3"
                  />
                  <Tab 
                    label="About" 
                    component={Link} 
                    to="/about" 
                    value="4"
                  />
                </TabList>
                <Container className="container" maxWidth="md">
                  <Switch>
                    <Route path="/contact" render={Contact} />
                    <Route path="/blog" render={Blog} />
                    <Route path="/" render={Home} />
                    <Route path="/about" render={Home} />
                    <Route path="/projects" render={Home} />
                  </Switch>
                </Container>
              </Fragment>
            )}
          />
      </TabContext>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
