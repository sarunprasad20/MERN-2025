import React from 'react'

const About = ({items}) => {
    return (
        <div>
            <ol>
                {items.map((fruit)=>(<li>{fruit}</li>))}
            </ol>
             {/* <h1>{users.username}</h1> */}
             {/* <h1>{users.password}</h1> */}
        </div>
    )
}
export default About