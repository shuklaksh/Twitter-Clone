import React from 'react';
import "./SidebarOptions.css";


function SidebarOptions({active,Icons,text}) {
  return (
    <div className={'sidebarOptions'}>
        <div> <Icons /> </div>
        <h2>{text}</h2>
      
    </div>
  )
}

export default SidebarOptions
