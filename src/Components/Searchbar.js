import React from "react";
import { MDBCol, MDBInput } from "mdbreact";
import axios from 'axios';
import '../search.css';

class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            query: '',
            results: null,
            loading: false,
            message: '',

        };

        this.cancel = '';

    }

    async fetchSearchResults(query) {
        const searchURL = `http://69.14.232.11:4000/results?text=${query}`;
        const response = await fetch(searchURL);
        const data = await response.json();
        this.setState({results: data.data, loading: false});
        console.log(data.data)

    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        //console.warn(query);
        this.setState({query: query, loading: true, message: ''}, () =>
        this.fetchSearchResults(query)
        )
    };

    render() {
        const {query} = this.state;
        // console.warn(this.state);
        return (

            <center><div className="container">
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
                          integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
                          crossOrigin="anonymous"/>
                    {/*heading*/}
                    <h2 className="heading">Live Search</h2>
                    <label className="search-label" htmlFor="search-input">
                        <input
                            type="text"
                            name="query"
                            value={query}
                            id="search-input"
                            placeholder="Search"
                            onChange={this.handleOnInputChange}
                        />

                    </label>

                    <div id = "contain" style={{backgroundColor: "white", marginTop: "20px", width: "50%", alignContent: "center", overflow: "hidden", paddingRight: "10px"}}>
                    {!this.state.results
                        ?
                        <div>Enter your search query and the results will show up automatically</div>
                        :
                        <div>{this.state.results.map(res => {
                            return(

                                <ul key = {res.idcontent} style={{listStyleType: "none"}}>

                                    <div id="resultsreturn" style={{backgroundColor: "white"}}>

                                        <li><h3><a href={res.contenthref}> {res.contentname}</a></h3></li>
                                    {res.contentbody}
                                    </div>
                                </ul>

                            )
                        })}
                        </div>
                    }

                    </div></div></center>
        );
    }
}

export default SearchPage;