import React from 'react';
const VedioDetails = ({ vedio }) => {
   
    if (vedio) {
        const VedioSrc=`https://www.youtube.com/embed/${vedio.id.VideoId}`;
        return (
            <div>
                <div className='ui embed'>
                    <iframe src={VedioSrc} title='Vedio Player'/>
                </div>
                <div className='ui segment'>
                    <h4 className='ui header'> {vedio.snippet.title}</h4>
                    <p>   {vedio.snippet.description}</p>

                </div>
            </div>
        )
    }
    return <div>Loading...</div>
}
export default VedioDetails;