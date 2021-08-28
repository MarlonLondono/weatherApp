import axios from "axios";

export const GET_CITY = 'GET_CITY';
export const GET_NEW_CITY = 'GET_NEW_CITY';
export const GET_REMOVE_CITY = 'REMOVE_CITY';
export const GET_CURRENT_CITY = 'GET_CURRENT_CITY';

const api = 'https://api.openweathermap.org/data/2.5';
const apiKey = 'd8bfc3c8bdd5acda77416b6e5c740be6';

export const getCity = (city) => {
    return async(dispatch) => {
        const res = await axios.get(`${api}/weather?q=${city}&appid=${apiKey}`);
        dispatch({
            type: GET_CITY,
            payload: res.data
        })
    }
}

export const getNewCity = (city) => {
    return async(dispatch) => {
        const res = await axios.get(`${api}/weather?q=${city}&appid=${apiKey}`);
        dispatch({
            type: GET_NEW_CITY,
            payload: res.data
        })
    }
}

export const getRemoveCity = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_REMOVE_CITY,
            payload: id
        })
    }
}

export const getCurrentCity = (city) => {
    return async (dispatch) => {
        const res = await axios.get(`${api}/weather?q=${city}&appid=${apiKey}`);
        console.log(res);
        dispatch({
            type: GET_CURRENT_CITY,
            payload: res.data
        })
    } 
}