import React from "react";
import { MDBCol, MDBInput } from "mdbreact";

const SearchPage = () => {
    return (
        <MDBCol className="searchbar" md="6">
            <MDBInput  hint="Search" type="text" containerClass="active-pink active-pink-2 mt-0 mb-3" />
        </MDBCol>
    );
}

export default SearchPage;