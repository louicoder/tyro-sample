import React from 'react';
import classes from './FacesList.css'

const FacesList = (props) => {

	return (
        <div className={classes.container}>
            props.faces.map(face => (
                <div className={classes.singleFace}>
                    <div>
                        <img src="" alt="profile"/>
                    </div>
                    <div className={classes.faceInfo}>

                    </div>
                </div>
            ))

        </div>
    );
};

export default FacesList;
