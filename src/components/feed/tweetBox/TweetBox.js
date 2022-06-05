import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
                <input type='text' placeholder="What's happening bitches?"></input>
            </div>
            <Button type='submit' className='tweetBox__tweetBtn'>Tweet</Button>

        </form>
      
    </div>
  )
}

export default TweetBox
