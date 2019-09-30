import React from 'react';
import '../css/login.css'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <div className="login-box">
            <div><img src={process.env.PUBLIC_URL + '/images/user.png'} alt="nihao" className="icon"></img><input type="text" placeholder="Username" /></div>
            <div><img src={process.env.PUBLIC_URL + '/images/user.png'} alt="nihao" className="icon"></img><input type="text" placeholder="Password" /></div>
        </div>
    }
}

export default Login;