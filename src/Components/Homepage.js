import React, {Component} from 'react';
import './styles.css';
import {Nav, Navbar, FormControl, Form, Button, Image} from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import SearchPage from "./Searchbar";
import Logo from "../Art/Goggle.png";
import Aboutus from "./Aboutus";


const Background = require('../Art/Background.png');


const divStyle = {
    width: '100%',
    height: '1000px',
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
};




export default class Homepage extends Component {
    render(){
        return(

          <div style={divStyle}>

            <Navigationbar/>
           <img className="homepage_logo" src={Logo}/>
           <SearchPage/>


          </div>


        );
    }
}