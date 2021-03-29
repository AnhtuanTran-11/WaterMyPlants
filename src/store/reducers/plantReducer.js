import { FAILED_LOADED_PLANTS, LOADED_PLANTS, START_LOAD_PLANTS } from "../actions/plantActions";



const initialData= {
    myPlants: [
        {
        id: 500,
        nickname: 'Green Plant 55',
        species : 'ficus'
        h2oFrequency: 5,
        // image: (optional)
        }
        {
            id: 501,
            nickname: 'Red Plant 55',
            species : 'Tree'
            h2oFrequency: 2,
            // image: (optional)
            }
            {
                id: 9999,
                nickname: 'Mushroom',
                species : 'Mushroom tree'
                h2oFrequency: 4,
                // image: (optional)
                }
    ],
    isLoading: false,
    errorMessage: ''
}

export const plantReducer = (state = initialData, action) => {
    switch(action.type){
        case START_LOAD_PLANTS: 
            return {...state, isLoading: true }
        case LOADED_PLANTS:
            return{...state, isLoading: false, myPlants: action.payload, errorMessage: ''}
        case FAILED_LOADED_PLANTS:
            return{...state, errorMessage: action.payload, isLoading: false}
    }

}
