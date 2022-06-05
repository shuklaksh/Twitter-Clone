import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className='widgets__searchIcon'/>
        <input type='text' placeholder='Search Twitter' />
      </div>
      <div className="widgets__container">
        <h2>What's Happening...</h2>
        <TwitterTweetEmbed tweetId={"1532660245754806273"} />

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="VishalDayama"
            options={{ height: 400 }}
        />

      </div>
    </div>
  )
}

export default Widgets
