import React, { Component } from "react"


import axios from 'axios';


class login extends Component {


    changeHandler = e => {
    
        this.setState({ [e.target.name]: e.target.value })
      }
    
      submitHandler = e => {
    
    
        e.preventDefault();
    
      }


      login = e => {
        e.preventDefault();
    
        axios.post("http://localhost:3000/users",this.state)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error);
          })
      }


      render() {
        const { userLogginName, userLoginPassword} = this.state
        

        return (
          
            <div>
              <form onSubmit={this.submitHandler}>
                <div>
    
                  <input
    
                    type="text"
                    name="userName"
                    value={userLogginName}
                    onChange={this.changeHandler}
                  />
                </div>
               
                <div>
    
                  <input
                    type="password"
                    name="userPassword"
                    value={userLoginPassword}
                    onChange={this.changeHandler}
                  />
                </div>
                <button type="submit" onClick={this.login} >logga in</button>

            


          </form>



          </div>
       

                
                
              
        )
      }
    }
export default login;