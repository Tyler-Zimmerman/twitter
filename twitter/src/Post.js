import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({ 
    dispalyName, 
    username, 
    verified, 
    timestamp, 
    text, 
    image, 
    avatar 
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png' />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            Tyler Zimmerman{' '}
                            <span className='post__headerSpecial'>
                                <VerifiedUserIcon className='post__badge' /> @TylerZimmermanSWE
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>I am building a twitter clone!</p>
                    </div>
                </div>
                <img 
                src='https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY1NDAzOTg4MDQ3NDM5MzE0/tdih-twitter-gettyimages-1151289639.jpg' 
                alt='' />
                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
        
    )
}

export default Post
