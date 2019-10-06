import React from 'react';
import { Icon } from 'antd';
import '../css/login.css'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    divFocus = () => {
        const divB = document.getElementById('inputDiv');
        divB.style['border-color'] = 'red';
    }



    inputFocus = (e)=>{
        // const divB = document.getElementById('inputDiv');
        // console.log(divB)
        // divB.style['border-color'] = 'black';
    }

    divBlur = () => {
        const divB = document.getElementById('inputDiv');
        divB.style['border-color'] = 'rgb(217, 217, 217)';
    }

    render() {
        return <div className="login-box">
            <div id="inputDiv" 
                onFocus={this.divFocus}
                obBlur={this.divBlur}
                >
                <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }}></Icon>
                <input type="text" 
                    placeholder="Username"
                    // onFocus={this.inputFocus}
                    // onBlur={this.inputBlur}    
                />
            </div>
            <div>
                <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }}></Icon>
                <input type="text" 
                    placeholder="Password"

                />
            </div>
        </div>
    }
}

export default Login;