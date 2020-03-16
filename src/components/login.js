import React from 'react';
import '../css/login.css'
import UserInput from './UserInput'
import axios from 'axios';
import qs from 'qs'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errInfo: false
        }
    }

    onInputChange = (e) => {
        const flag = e.target.value !== '' ? false : true
        if (e.target.placeholder === 'Username') {
            this.setState({ username: e.target.value, emptyName: flag });

        }
        if (e.target.placeholder === 'Password') {
            this.setState({ password: e.target.value, emptyPsw: flag });
        }
        console.log(flag, this.state);

        // if(flag) {
        //     e.target.parentNode.style['border-color'] = 'rgb(245,34,45)';
        //     e.target.parentNode.style['box-shadow'] = 'none';
        //     console.log(e.target.parentNode);

        // }
    }

    login = (e) => {
        console.log(this.state);
        if (this.state.password === '') {
            this.setState({ emptyPsw: true });
        }
        if (this.state.username === '') {
            this.setState({ emptyName: true });
        }

        axios.post('http://localhost:3001/login', qs.stringify({
            username: this.state.username,
            password: this.state.password,
        })).then(res => {
            console.log(res, 111);

        }).catch((error) => {
            console.log(error, 222);

        });

    }

    render() {
        return <form className="login-box">
            <UserInput
                placeholder='Username'
                iconType='user'
                inputType='text'
                onChange={this.onInputChange}
            />
            <UserInput
                placeholder='Password'
                iconType='lock'
                inputType='password'
                onChange={this.onInputChange}
            />
            <div className='item3'>
                <p>
                    <input id="check" className="check" type="checkbox" />
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