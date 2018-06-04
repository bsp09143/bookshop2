import React,{Component} from 'react';
import Home from './Home.jsx';
import Content from './Content.jsx';
import { Nav,Navbar,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';
import { Route, NavLink, HashRouter } from "react-router-dom";
import "../components/Content.css";

class App extends Component 
{
    render()
    {
        
        return(
            <HashRouter>     
                <div>
                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                            <a href="#home">React-Bootstrap</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <NavItem eventKey={1} href="#">
                                <NavLink to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <NavLink to="/content">Location List</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>                    
                    <div className="well wellStyles">
                        <Route path="/home" component={Home}/>
                        <Route path="/content" component={Content}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;