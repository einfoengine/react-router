import React from 'react'

const Posts = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hey I am posts id {props.match.params.postId}</h1>
        </div>
    )
}

export default Posts
