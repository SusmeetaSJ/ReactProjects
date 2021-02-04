import React from 'react';
import VedioItem from './VedioItem';
const VedioList = (props) => {
    const list=props.vedios.map((vedio)=>{
        return <VedioItem></VedioItem>
    })
return <div>{list}</div>
}
export default VedioList;