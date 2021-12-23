import React, { Component } from "react";

class ToyCard extends Component {
  state = {
    toyData: [],
  };

  getToys = async () => {
    const results = await fetch("http://localhost:3000/toys", {
      method: "GET",
    });
    const jsonResults = await results.json();
    this.setState({
      toyData: jsonResults,
    });
  };

  async componentDidMount() {
    await this.getToys();
  }

  handleDelete = async (id) => {
    const results = await fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
    });
    if (results.status == 200) {
      await this.getToys();
    }
  };

  handleUpdate = async (existingLikes, id) => {
    const results = await fetch(`http://localhost:3000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Accept: "application/json",
      },
      body: JSON.stringify({
        likes: existingLikes + 1,
      }),
    });
    if(results.status == 200) {
      await this.getToys();
    }
  };

  render() {
    const toyData = this.state.toyData;
    return (
      <React.Fragment>
        {toyData.map((value) => {
          return (
            <div className="card">
              <h2>{value.name}</h2>
              <img src={value.image} alt={value.name} className="toy-avatar" />
              <p>{value.likes} Likes </p>
              <button
                className="like-btn"
                onClick={() => this.handleUpdate(value.likes, value.id)}
              >
                Like {"<3"}
              </button>
              <button
                className="del-btn"
                onClick={() => this.handleDelete(value.id)}
              >
                Donate to GoodWill
              </button>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ToyCard;
