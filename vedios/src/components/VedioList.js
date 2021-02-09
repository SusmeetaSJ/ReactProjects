import React from 'react';
import VedioItem from './VedioItem';
const VedioList = ({vedios,onVedioSelect}) => {
    const list=vedios.map((vedio)=>{
        return <VedioItem vedio={vedio} onVedioSelect={onVedioSelect}/>
    })
return <div className='ui relaxed divided list'>{list}</div>
}
export default VedioList;