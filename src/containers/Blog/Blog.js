import React, { Component } from 'react';

import Posts from './Posts/Posts';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                    <Posts />
                </header>
            </div>
        );
    }
}

export default Blog;