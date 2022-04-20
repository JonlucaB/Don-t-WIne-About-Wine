import React from "react";
import "./Profile.css";
const users = new Map();
users.set("test", "password");
function createAccount() {
  //Need to check if userName has already been created

  const userName = document.getElementById("newuser-name").value;
  const password = document.getElementById("newuser-pass").value;
  if (users.has(userName)) console.log("Username already taken!");
  else users.set(userName, password);

  console.log(users.entries());
}

function checkAccount() {
  var userName = document.getElementById("user-name").value;
  var password = document.getElementById("user-pass").value;
  if (users.get(userName) === password) console.log("Here!"); //log in
  else console.log("Not here");
}

export default function ProfilePage() {
  return (
    <React.Fragment>
      <div class="split left">
        <div class="centered">
          <h1>Welcome !</h1>
          <h3>Already have an account ?</h3>
          <input
            type="text"
            id="user-name"
            class="input-box"
            placeholder="User Name"
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            id="user-pass"
            class="input-box"
            placeholder="Password"
          ></input>
          <br></br>
          <br></br>
          <button id="loginButton" onClick={checkAccount}>
            Log in!
          </button>
        </div>
      </div>

      <div class="split right">
        <div class="centered">
          <h1>Welcome !</h1>
          <h3>No Account? Sign up!</h3>
          <input
            type="text"
            id="newuser-name"
            class="input-box"
            placeholder="User Name"
          ></input>
          <br></br>
          <br></br>
          <input
            type="password"
            id="newuser-pass"
            class="input-box"
            placeholder="Password"
          ></input>
          <br></br>
          <br></br>
          <button id="signupButton" onClick={createAccount}>
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
