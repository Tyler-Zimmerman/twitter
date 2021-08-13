import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' 
                    />
                    <input
                        placeholder='Whats happening?'
                        type='text'
                    />
                </div>
                <input
                    className='tweetBox__imageInput'
                    placeholder='Enter image Url (optional)'
                    type='text'
                />
                
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;