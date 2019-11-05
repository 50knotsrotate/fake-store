import React, { Component } from 'react'
import { get } from 'axios';

export default class Home extends Component {
    componentDidMount = () => {
        get('/').then(res => { 
            
        }).catch(err => { 
            this.props.history.push('/register')
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
