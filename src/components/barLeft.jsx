import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
    width: 20%;
    height: auto;
    background-color: rgba(247, 247, 247, 0.671);
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

const Span = styled.span`
    margin: 15% 0%;
`;

const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
`;

const DivCol = styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
`;

const DivTitle = styled.div`
    font-size: 30px;
    font-weight: 600;
    box-sizing: border-box;
    margin: 10% 0%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;

const P = styled.p`
    font-size: 30px;
    font-weight: 600;
`;

const DivImg = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
`;

const BarLeft = () => {
    const city = useSelector(store => store.currentCity);
    const img = `http://openweathermap.org/img/wn/${city.weather && city.weather[0].icon}@2x.png`;
    return(
        <>
        { city.name && (<Div>
            <span> Current city </span>
            <DivTitle>
                {city.name}, {city.sys.country}
            </DivTitle>
            <DivFlex>
                <DivImg>
                    <Img src={img} alt={city.weather[0].main} />
                </DivImg>
                <DivImg>
                    <P>{Math.floor(city.main.temp)}°C</P>
                    <p>{city.weather[0].main}</p>
                </DivImg>
            </DivFlex>
            <DivFlex>
                <DivCol>
                    <Span>{Math.floor(city.main.temp_min)}°C</Span>
                    <Span>{Math.floor(city.main.temp_max)}°C</Span>
                    <Span>{Math.floor(city.main.feels_like)}°C</Span>
                    <Span>{city.main.humidity}%</Span>
                </DivCol>
                <DivCol>
                    <Span>Temp minimum</Span>
                    <Span>Temp maximun</Span>
                    <Span>Feels like</Span>
                    <Span>Humidity</Span>
                </DivCol>
            </DivFlex>
        </Div>)}
        </>
    )
}

export default BarLeft;