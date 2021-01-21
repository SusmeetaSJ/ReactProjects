import React from 'react';
const CommanDeatails=(props)=>{
    return(
        <div className="comment">
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
        </div>
        <div className="metadata">
    <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
   </div> 
    )
}
export default CommanDeatails;