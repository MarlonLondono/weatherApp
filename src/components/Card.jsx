import { useDispatch } from "react-redux";
import { getRemoveCity } from "../actions";
import styled from "styled-components";

const Div = styled.div`
    width: 27%;
    height: 30%;
    padding: 10px;
    margin-bottom: 20px;
    background-color: rgba(246, 211, 135, 0.88);
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 70%;
    }
`;

const Button = styled.button`
    width: 20px;
    height: 20px;
    align-self: flex-end;
    text-align: center;
`;

const DivImg = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const DivContain = styled.div`
    display: flex;
    flex-direction: row;
`;

const Span = styled.span`
    display: block;
    font-weight: 600;
    font-size: 20px;
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
            <Button onClick={onHandleClick}>X</Button>
            <span>{`${name}, ${country}`}</span>
            <DivContain>
                <DivImg>
                    <Img src={img} alt={main} />
                </DivImg>
                <DivImg>
                    <span> {main} </span>
                    <Span>{Math.ceil(temp)} ° C</Span>
                </DivImg>
            </DivContain>
        </Div>
    )
}

export default Card;
