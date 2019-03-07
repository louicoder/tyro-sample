import React from 'react';
import classes from './FacesList.css';
import {withRouter} from 'react-router-dom'

class FacesList extends React.Component {

    state={
        selectedPerson: {}
    }

    selectedPerson = (person) => {
        this.props.history.replace('/faces/'+person.login.uuid);
        console.log(this.props)

    }

    render() {
        return (
            <div className={classes.container}>
            {this.props.data.map(person => (
                <div className={classes.singleFace} key={person.login.uuid} onClick={() => this.selectedPerson(person)}>
                    <div className={classes.image}>
                        <img src={person.picture.medium} alt="profile"/>
                    </div>
                    <div className={classes.faceInfo}>
                        <p>Name: {person.name.first + " " + person.name.last}</p>
                        <p>Email: {person.email}</p>
                        <p>State: {person.location.state}</p>
                        <p>Phone: {person.phone}</p>
                    </div>
                </div>
            ))}

        </div>
        )
    }
} 

export default withRouter(FacesList);
