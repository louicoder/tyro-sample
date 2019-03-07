import { GET_FACES_SUCESS, GET_FACES_FAILURE } from '../actions/actionTypes';

const initialState = {
    faces: [],
    error: '',
    filteredFaces: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FACES_SUCESS:
			return {
                ...state,
                faces: action.faces
            };
        case GET_FACES_FAILURE:
			return {
                ...state,
                error: action.error
            }
        // case 'FILTER_FACES':
        //     console.log(action.id)
        //     const filteredFaces = [...state.faces]
        //     const newFaces = filteredFaces.filter(face => {
        //         return face.name.first.indexOf(action.name) !== -1;
        //     })
        //     console.log('reducer state' ,state.faces.length, 'reducer filtered', newFaces.length)
        //     return {
        //         ...state,
        //         [filtered]: newFaces
        //     }
		default:
			return state;
	}
};

export default reducer;
