import { useDispatch } from "react-redux";
import { getRemoveCity } from "../actions";
import styled from "styled-components";

const Div = styled.div`
    width: 33%;
    background-color: white;
`;

const Card = ({name, country, main, icon, temp, id}) => {
    const dispatch = useDispatch();

    console.log(name, country, main, icon, temp, id)

    const img = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    const onHandleClick = (e) => {
        e.preventDefault();
        dispatch(getRemoveCity(id))
    }

    return (
        <Div>
            <button onClick={onHandleClick}>X</button>
            <span>{`${name}, ${country}`}</span>
            <div>
                <img src={img} alt={main} />
            </div>
            <div>
                <span> {main} </span>
                <h1>{temp}</h1>
            </div>
        </Div>
    )
}

export default Card;
