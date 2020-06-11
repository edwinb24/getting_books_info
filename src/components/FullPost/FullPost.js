import React, { Component } from 'react';

import './FullPost.css';

import URL from "./../../GLOBALS"

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    gettingBookInfo(resp) {
        this.setState({
            loadedPost: resp
        })
    }

    async componentDidUpdate() {
        if(this.props.id) {
            if(!this.state.loadedPost  ||
                (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                try {
                    const resp = await fetch(`${URL}/${this.props.id}`)
                    const response = await resp.json()
                    if(!response) {
                        throw Error(resp.statusText)
                    }
                    this.gettingBookInfo(response)
                } catch (error) {
                    console.log(
                        `%c 🤦Oh no! No data received  🤦\n 
                        ${error}`, "color: orange; font-size: 18px; font-weight: 800"
                    )
                }
            }
        }


    }

    render () {
        let post = 
                <p style={{textAlign:'center'}}>
                    Please select a Post!
                </p>
        if(this.props.id)
            post = 
                <p style={{textAlign:'center'}}>
                    Loading!
                </p>
        if(this.state.loadedPost) {
            post = 
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
        } 

        


            
        return post;
    }
}

export default FullPost;