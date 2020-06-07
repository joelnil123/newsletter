import React, { Component } from "react"


import axios from 'axios';


class Mainpage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      newsletter: false,
      loggedin: false


    }
  }

  changeHandler = e => {

    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {


    e.preventDefault();

  }


  adduser = e => {

    e.preventDefault();

    axios.post("http://localhost:3000/users", this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })



  }

  login = e => {
     
    
    axios.post("http://localhost:3000/users", this.state, this.state.loggedin = true)
    
    .then(response => {
      console.log(response)
      if (response.data === "invalid")
      {
        console.log("fel ");
      } else
      {
        var loggedInUser = {
          id: response.data.id,
            username: response.data.userName,
            newsletter: response.data.newsletter,
          };
          this.setState({
      
            newsletter: response.data.newsletter,
            id: response.data.id,
          
          });
          localStorage.setItem(
            "currentLoggedInUser",
            JSON.stringify(loggedInUser)
            );
          }
        })
        e.preventDefault();

      }

      changeNewsLetter = (newsletter) => {
        var data = { "newsletterTrue": newsletter }
        axios.post("http://localhost:3000/users",this.state, this.state.newsletter = true)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error);
        })


        
    
      } 
 

  
    



      render() {

        

        const { userName, userEmail, userPassword } = this.state
        const { loginUserName, loginUserPassword} = this.state

        if (this.state.loggedin === true)
        
        {
          return (

          <div>
            <p>
              subscribe to news letter
            </p>

            <form onSubmit={this.changeNewsLetter}>
              <div>
              Set Newsletter status to TRUE by clicking here: <button onClick={this.onClickHandler}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
              </div>

            </form>
            
            
          </div>

          )
        } else
        {


    return (

      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input

              type="text" id="unId"

              name="userName"
              value={userName}
              onChange={this.changeHandler}
            />
            <label for="unId">userName:</label>
          </div>
          <div>

            <input
              type="email" id="emailId"
              name="userEmail"
              value={userEmail}
              onChange={this.changeHandler}
            />
            <label for="emailId">user email:</label>
          </div>
          <div>

            <input
              type="password" id="upasswordId"
              name="userPassword"
              value={userPassword}
              onChange={this.changeHandler}
            />
            <label for="upasswordId">user password:</label>
          </div>
          <button type="submit" onClick={this.adduser} >registrera ny användare</button>


        </form>

        <form onSubmit={this.submitHandler}>

          <div>
            <input
              type="text" id="userLoggindId"

              name="loginUserName"
              value={loginUserName}
              onChange={this.changeHandler}
            />
            <label for="userLoggindId">userName:</label>
          </div>

          <div>
            <input
              type="text" id="userloginPassowrdId"

              name="loginUserPassword"
              value={loginUserPassword}
              onChange={this.changeHandler}
            />
            <label for="userloginPassowrdId">password:</label>
          </div>

          <button type="submit" onClick={this.login} >logga in</button>


        </form>
      </div>


    ) 

        }
  }
}
export default Mainpage;