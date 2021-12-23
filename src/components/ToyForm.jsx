import React, { Component } from "react";

class ToyForm extends Component {
  state = {
    cardData: [],
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      cardData: { ...this.state.cardData, [name]: value },
    });
  };

  handleSubmit = (event) => {
    console.log(this.state.cardData);
    event.preventDefault();
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.cardData.name,
        image: this.state.cardData.image,
      }),
    }).then((response) => console.log(response));
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={(e) => {
            this.handleSubmit(e);
          }}
          lassName="add-toy-form"
        >
          <h3>Create a toy!</h3>
          <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            name="name"
            placeholder="Enter a toy's name..."
            className="input-text"
          />
          <br />
          <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            name="image"
            placeholder="Enter a toy's image URL..."
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
