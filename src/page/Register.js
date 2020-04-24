import React, {Component} from 'react';  



class Register extends Component {  
  render(){  
    return (
    <body>
        <div className="header">
      <div className="main-header">
        <h1>Register</h1>
        <hr/>
        <h3>Selamat datang di KMO</h3>
        <p><input type="text" placeholder="nama"></input></p>
        <p><input type="text" placeholder="email"></input></p>
        <p><input type="text" placeholder="phone number"></input></p>
        <p><input type="password" placeholder="password"></input></p>
        <p><button>LOGIN</button></p>
    </div>
    </div>
    </body>
    );  
  }  
}  
export default Register;