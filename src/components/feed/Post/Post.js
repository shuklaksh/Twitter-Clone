import React from 'react'
import './Post.css'
import { VerifiedUserOutlined } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post() {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src = 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png' />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Lakshay Shukla 
                        <span className='post__headerSpecial'>
                            <VerifiedUserOutlined className='post__badge'/>
                            @shuklaksh
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I pooped my pants</p>
                </div>
            </div>
            <img src='https://media.giphy.com/media/46RrPTYlYIemQ/giphy.gif'></img>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
        </div>    
    </div>
  )
}

export default Post
