import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import URL from "./../../GLOBALS"

class Blog extends Component {

    state = {
        post: [],
        selectedPostId: null
    }


    postSelectedHandler(id) {
        this.setState({selectedPostId: id})
    }

    processInfo(resp) {
        const fetchPosts = resp.slice(0,4)
        const updatedPosts = fetchPosts.map(post => {
            return {
                ...post,
                author:"Edwin"
            }
        })
        this.setState({
            post: updatedPosts
        })

    }

    async componentDidMount() {
        try {
            const resp = await fetch(URL)
            const response = await resp.json()
            if(!response) {
                throw Error(resp.statusText)
            }
            this.processInfo(response)
        } catch (error) {
            console.log(
                `%c 🤦Oh no! No data received  🤦\n 
                ${error}`, "color: orange; font-size: 18px; font-weight: 800"
            )
        }
        console.log("blog.js - Mounted!")
    }

    render () {
        const posts = this.state.post.map((singlePost) => {
            return <Post title={singlePost.title} key={singlePost.id} author={singlePost.author} clicked={() => this.postSelectedHandler(singlePost.id)}/>
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;