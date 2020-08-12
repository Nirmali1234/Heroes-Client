import React, { Component } from "react";

class Hero extends Component {
  state = {
    heroId: this.props.avenger.id,
    // movies:this.props.avenger.movies,
    // likeCount: this.props.avenger.likeCount,
  };
  render() {
    //return (
    //   <React.Fragment>
    //     <h1 style={{ width: "100rem", fontSize: "90px" }}>
    //       Avengers incoming...{" "}
    //     </h1>
    //     <h2>{this.isHero()}</h2>
    //     <button type="button" className="btn btn-primary">
    //       Click on Avenger
    //     </button>
    //   </React.Fragment>
    // );

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.avenger.imgUrl}
          className="card-img-top"
          //   alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.avenger.name}</h5>
          <h6>{this.props.avenger.birthname}</h6>
          <ul>{this.showMovies()}</ul>
          <button className="btn btn-info" onClick={this.props.onLike}>
            Like{" "}
            <span className="badge badge-light">
              {this.props.avenger.likeCount}
            </span>
          </button>{" "}
          <button className="btn btn-danger" onClick={this.props.onDelete}>
            {" "}
            Delete
          </button>
        </div>
      </div>
    );
  }
  isHero() {
    // if (this.state.heroId < 0) return "Not an avenger";
    // else return "Is an avenger";

    // another method to write if else statement
    return this.state.heroId < 0 ? "Not an avenger" : "Is an avenger";
  }

  showMovies() {
    if (this.props.avenger.movies.length === 0)
      return <p>No movies available</p>;
    else
      return this.props.avenger.movies.map((movie) => (
        <li key={movie}>{movie}</li>
      ));
  }
}

export default Hero;
