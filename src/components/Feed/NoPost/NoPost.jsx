import React from 'react';
import '../Post/Post.css';

function NoPost() {
    return (
        <div className='post container'>
            <div className='text-center p-2'>
                <h2 >There are no posts found!</h2>
                <p>Keep checking back later or refresh to ge more feeds</p>
            </div>
        </div>
    )
}

export default NoPost