import React, { Component } from "react";
import Hero from "./Hero";
import axios from "axios";

class Heroes extends Component {
  state = {
    allAvengers: [
      // { id: 1, likeCount: 5 },
      // { id: 2, likeCount: 10 },
      // { id: 3, likeCount: 15 },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div className="col" key={avenger.id}>
              <Hero
                key={avenger.id}
                avenger={avenger}
                onDelete={() => this.deleteAvenger(avenger.id)}
               onLike = {() => this.likeAvenger(avenger)}
                // likeCount={avenger.likeCount}
                // name= {avenger.name}
                // birthname={avenger.birthname}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async likeAvenger(avenger) {
    await axios.put(`http://localhost:5000/api/heroes/${avenger.id}`, {
      likeCount: avenger.likeCount + 1,
    });

    let allAvengers = [...this.state.allAvengers];
    let index = allAvengers.indexOf(avenger);
    allAvengers[index] = {...avenger};
    allAvengers[index].likeCount++;
    this.setState({allAvengers: allAvengers});
  }

  async deleteAvenger(avengertodeleteid) {
    let newAvengers = this.state.allAvengers.filter(
      (avenger) => avenger.id != avengertodeleteid
    );
    await axios.delete(`http://localhost:5000/api/heroes/${avengertodeleteid}`);
    this.setState({allAvengers: newAvengers});
  }

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/heroes");
    console.log(data);

    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        name: avenger.name,
        birthname: avenger.birthname,
        likeCount: avenger.likeCount,
        movies: avenger.movies,
      };
    });

    this.setState({ allAvengers: avengers });
  }
}

export default Heroes;
