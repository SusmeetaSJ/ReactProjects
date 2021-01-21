import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard'
import CommanDeatails from './CommomDetails';
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommanDeatails
                    author="Sam"
                    timeAgo="Today at 6.00PM"
                    content="Nice Blog"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommanDeatails
                    author="Richard"
                    timeAgo="Today at 3.00PM"
                    content="Nice writing"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommanDeatails
                    author="Ted"
                    timeAgo="Yesterday at 5.00AM"
                    content="Nice lines"
                />
            </ApprovalCard>


        </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)