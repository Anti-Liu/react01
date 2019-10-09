import React from 'react';
import { Icon } from 'antd';
import '../css/login.css'

export default class UserInput extends React.Component {

    constructor(){
        super();
        this.state = {
            empty: false,
            focus: false
        }
    }

    divFocus = () => {
        const div = this.refs.div;
        this.setState({focus: true});
        if(this.state.empty){
            div.style['border-color'] = 'rgb(245,34,45)';
            div.style['box-shadow'] = '0 0 5px rgba(245,34,45, 0.5)';
        } else {
            this.refs.div.style['border-color'] = 'rgb(64, 169, 255)';
            this.refs.div.style['box-shadow'] = '0 0 5px rgba(64, 169, 255, 0.5)';
        }
        
    }


    divBlur = () => {
        const div = this.refs.div;
        this.setState({focus: false});
        if(this.state.empty){
            div.style['border-color'] = 'rgb(245,34,45)';
        } else {
            this.refs.div.style['border-color'] = 'rgb(217, 217, 217)';
        }
        this.refs.div.style['box-shadow'] = 'none';

        
    }

    

    handleChange = (e) => {
        this.props.onChange(e);
        const div = this.refs.div;
        console.log(e.target.value);
        
        if(e.target.value === '') {
            this.setState({empty: true})
            div.style['border-color'] = 'rgb(245,34,45)';
            div.style['box-shadow'] = '0 0 5px rgba(245,34,45, 0.5)';
        } else {
            this.setState({empty: false})
            div.style['border-color'] = 'rgb(64, 169, 255)';
            div.style['box-shadow'] = '0 0 5px rgba(64, 169, 255, 0.5)';
        }

    }

    onMouseOver = ()=>{
        if(!this.state.focus && !this.state.empty){
            this.refs.div.style['border-color'] = 'rgb(64, 169, 255)';
        }
    }

    onMouseLeave = ()=>{
        if(!this.state.focus && !this.state.empty){
            this.refs.div.style['border-color'] = 'rgb(217, 217, 217)';
        }
    }

    render() {
        return (
            <div style={{border: 'none'}}>
                <div id='inputDiv' ref='div'  onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
                    <Icon type={this.props.iconType} style={{ color: 'rgba(0,0,0,.25)' }}></Icon>
                    <input className='infoInput'
                        type={this.props.inputType}
                        placeholder={this.props.placeholder}
                        onFocus={this.divFocus}
                        onBlur={this.divBlur}
                        onChange={this.handleChange}
                    />
                </div>
                <span className={this.state.empty?'showMsg':'msg'}>Please input {this.props.placeholder}</span>
            </div>
        )
    }
}