import React from 'react'
import "./Sidebar.css";
import SidebarOptions from './SidebarOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div className='sidebar'>
        {/* twitter Icon */}
        <TwitterIcon />

        {/* Sidebar Options */}
        <SidebarOptions active='1' Icons={HomeIcon} text="Home" />
        <SidebarOptions Icons={TagIcon} text="Explore" />
        <SidebarOptions Icons={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icons={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icons={ListAltIcon} text="Lists" />
        <SidebarOptions Icons={PermIdentityIcon} text="Profile" />
        <SidebarOptions Icons={MoreHorizIcon} text="More" />

        {/*tweet Button */}
        <Button variant="outlined" className='sidebar__tweet' fullWidth>Tweet</Button>  
      
    </div>
  )
}

export default Sidebar
