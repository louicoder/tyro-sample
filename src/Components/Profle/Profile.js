import React from 'react';
import {withRouter} from 'react-router-dom'

const profile = (props) => {
    
    const id = props.match.params.id
    let match = null;

    if (id) {
        match = props.data.filter(person => {
            return person.login.uuid === id
        })
    }


    // if (match) {
    //     return (
    //         <p>{match.name.first}</p>
    //     )
    // }

    return (
        <div>
            {/* <img src={'props.data.picture.large'} alt="profile"/> */}
            
        </div>
    )
} 

export default withRouter(profile);
