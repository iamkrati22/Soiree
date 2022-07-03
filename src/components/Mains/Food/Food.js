import React, { Component } from "react";
import Form from "./Form";
import Main from "./Main";
import Results from "./Results";

class Food extends Component {
  render() {
    return (
      <div>
        <Main />
        <br />
        <br />
        <Form />
        <Results />
      </div>
    );
  }
}

export default Food;
