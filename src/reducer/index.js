import { GET_CITY, GET_CURRENT_CITY, GET_NEW_CITY, GET_REMOVE_CITY } from "../actions";

const inicialState = {
    city: {},
    currentCity: {},
    cities : []
}

function RootReducer(state = inicialState, action){
    switch (action.type){
        case GET_CITY:
            return {
                ...state,
                city: action.payload
            }
        case GET_NEW_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case GET_REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== action.payload)
            }
        case GET_CURRENT_CITY:
            return {
                ...state,
                currentCity: action.payload
            }
        default:
            return state
    }
}

export default RootReducer;