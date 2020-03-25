import React from "react";
import { MDBCol, MDBInput } from "mdbreact";
import axios from 'axios';


class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {apiResponse:""};

    }

    handleChange = (e) => {
        let {text} = e.target;
        // this.setState({text: e.target.value});

        this.setState( {
            [text]: text
    });
    };

    callAPI(){
        fetch("http://localhost:3000/database")
            .then(res => res.text())
            .then(res => this.setState({apiResponse: res}));
    }


    componentDidMount() {
        axios.get(`http://localhost:3000`)
            .then(res => {
                const text = res.data;
                this.setState({ text });
            });
        this.callAPI();

    }

    onSubmit(e) {
        e.preventDefault();
        const result = {
            text: this.state.text
    };

        axios({
            method: 'post',
            url: '/routes/database',
            data: {
                text: result
            }
        });
    }



    render() {
        return (
            <div>
            <form onSubmit={(e) => this.onFormSubmit(e)} className="search">
            <MDBCol className="searchbar" md="6">
                <MDBInput name="text" hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" onChange={this.handleChange}/>
            </MDBCol>
                <label><input type="submit" value="submit"></input>
                </label>
            </form>
                <p>{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default SearchPage;