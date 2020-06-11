import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {

    componentDidUpdate() {
        try {

        } catch(error) {
            console.log(`%c Oh, no! There was an error! ${error}`,
            "color: orange, font-weight: 800, font-size: 18px")
        }
    }
    render () {
        let post = this.props.id ?
        <div className="FullPost">
            <h1>Title</h1>
            <p>Content</p>
            <div className="Edit">
                <button className="Delete">Delete</button>
            </div>
        </div>
        : <p>Please select a Post!</p>
            
        return post;
    }
}

export default FullPost;