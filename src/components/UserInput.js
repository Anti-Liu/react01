import React from 'react';
import { Icon } from 'antd';
import '../css/login.css'

export default class UserInput extends React.Component {

    divFocus = () => {
        this.refs.div.style['border-color'] = 'rgb(64, 169, 255)';
        this.refs.div.style['box-shadow'] = '0 0 5px rgba(64, 169, 255, 0.5)';
    }


    divBlur = () => {
        this.refs.div.style['border-color'] = 'rgb(217, 217, 217)';
        this.refs.div.style['box-shadow'] = 'none';
    }

    render() {
        return (
            <div style={{border: 'none'}}>
                <div id='inputDiv' ref='div'>
                    <Icon type={this.props.iconType} style={{ color: 'rgba(0,0,0,.25)' }}></Icon>
                    <input className='infoInput'
                        type={this.props.inputType}
                        placeholder={this.props.placeholder}
                        onFocus={this.divFocus}
                        onBlur={this.divBlur}
                        onChange={this.props.onChange}
                    />
                </div>
                <span className={this.props.empty?'showMsg':'msg'}>Please input {this.props.placeholder}</span>
            </div>
        )
    }
}