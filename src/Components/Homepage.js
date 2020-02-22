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

    constructor(props){
        super(props);
        this.state = {apiResponse:""};
    }

    callAPI(){
        fetch("http://localhost:9000/database")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }

    componentWillMount(){
        this.callAPI();
    }
    render(){
        return(

          <div style={divStyle}>

            <Navigationbar/>
           <img className="homepage_logo" src={Logo}/>
           <SearchPage/>

           <p>{this.state.apiResponse}</p>
          </div>


        );
    }
}