import axios from 'axios';
import {GET_FACES_SUCESS, GET_FACES_FAILURE} from './actionTypes'

export const getFaces = () => {
	return (dispatch) => {
		axios
			.get('/')
			.then((res) => {
                console.log(res.data);
                dispatch(getFacesSucess(res.data))
			})
			.catch((err) => {
                console.error(err);
                dispatch(getFacesFailure(err))
			});
	};
};


export const getFacesSucess = (data) => {
    return {
        type: GET_FACES_SUCESS,
        faces: data
    }
}

export const getFacesFailure = (error) => {
    return {
        type: GET_FACES_FAILURE,
        error: error
    }
}


