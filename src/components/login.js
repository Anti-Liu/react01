import React from 'react';
import '../css/login.css'
import UserInput from './UserInput'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            emptyName: false,
            emptyPsw: false,
            errInfo: false
        }
    }

    onInputChange = (e) => {
        const flag = e.target.value ? false : true
        if(e.target.placeholder === 'Username') {
            this.setState({username: e.target.value, emptyName: flag});
        }
        if(e.target.placeholder === 'Password') {
            this.setState({password: e.target.value, emptyPsw: flag});
        }
    }

    login = (e) => {
        console.log(this.state);
        if(this.state.password === ''){
            this.setState({emptyPsw: true});
        }
        if(this.state.username === '') {
            this.setState({emptyName: true});
        }


    }
    
    render() {
        return <form className="login-box">
            <UserInput 
                placeholder='Username' 
                iconType='user' 
                inputType='text' 
                empty={this.state.emptyName} 
                onChange={this.onInputChange}
            />
            <UserInput 
                placeholder='Password' 
                iconType='lock' 
                inputType='password'
                empty={this.state.emptyPsw} 
                onChange={this.onInputChange}
            />
            <div className='item3'>
                <p>
                    <input  id="check" className="check" type="checkbox" />
                    <label htmlFor="check"></label>
                    <span>Remember me</span>
                    <a href='aa'>Forgot password</a>
                </p>
                
                <button type='button' onClick={this.login}>Log in</button>
                <p>Or <a href='aa'>register now!</a></p>
            </div>
        </form>
    }
}

export default Login;