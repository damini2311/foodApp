import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "...",
        avatar_url: "",
      },
    };
    // console.log("constructor...");
  }

  //if its parent is also class component and it has also component did mount first parent consturctor will be called then parent render
  // in render it will see the child component and go to the child compnt and
  // then child constructor will call then render then child componentdidmount after that parent componentdidmout will be call
  //we call api in componentdid mount bcz it call after render

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/damini2311");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;
    console.log("render...");
    return (
      <div className="user-card">
        <img
          src="https://avatars.githubusercontent.com/u/129715330?v=4"
          class=""
          alt=""
        />
        <h2>Name:{name}</h2>
        <h2>Location:{location}</h2>
        <h3>Contact</h3>
      </div>
    );
  }
}
export default UserClass;
