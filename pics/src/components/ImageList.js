import React from 'react';
const ImageList=(props)=>{
console.log(props.images);
const image=props.images.map((i)=>{
return(<img src={i.urls.regular} alt={i.description} key={i.id}></img>)
})
return <div>{image}</div>
}
export default ImageList;