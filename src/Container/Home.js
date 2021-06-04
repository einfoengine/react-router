import React from 'react'

const Home = (props) => {    
    return (
        <section>
            <h1>React Router Home</h1>
            <p>A react router tutorial by {props.name}</p>
            <p>Inspired by Stack Lerner</p>
        </section>
    )
}

export default Home
