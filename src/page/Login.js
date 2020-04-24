import React, {Component} from 'react';  



class Login extends Component {  
  render(){  
    return (
    <body>
        <div className="header">
      <div className="main-header">
        <h1>Login</h1>
        <hr/>
        <h3>Selamat datang di KMO</h3>
        <p><input type="text" placeholder="username"></input></p>
        <p><input type="password" placeholder="password"></input></p>
        <p><button>LOGIN</button></p>
    </div>
    </div>
    </body>
    );  
  }  
}  
export default Login;