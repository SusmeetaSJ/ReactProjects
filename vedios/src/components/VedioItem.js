import './VedioItem.css';
import React from 'react';
const VedioItem = ({ vedio,onVedioSelect }) => {
    return (
        <div className='vedio-list item' onClick={()=>onVedioSelect(vedio)}>
             <img className='ui image' src='flowers.jpg' alt={vedio.snippet.title}></img>
            <div className='content'>
                <div className='header'>
                    {vedio.snippet.title}
                </div>
            </div>
           
        </div>
    )
}
export default VedioItem;