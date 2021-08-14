import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core';
import db from './Firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Zwitter Guest',
            username: 'zwitterGuest1',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
        });
        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' 
                    />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder='Whats happening?'
                        type='text'
                    />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className='tweetBox__imageInput'
                    placeholder='Enter image Url (optional)'
                    type='text'
                />
                
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                    >
                    Tweet
                </Button>            
        </form>
        </div>
    );
};

export default TweetBox;