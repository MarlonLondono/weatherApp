import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getNewCity } from '../actions';
import Card from './Card';

const Div = styled.div`
    padding: 7% 4%;
    width: 70%;
    height: 100%;
`;

const Input = styled.input`
    width: 100%;
    height: 30px;
    background-color: white;
    border: none;
    margin-bottom: 7%;
`;

const SearchBar = () => {
    const dispatch = useDispatch();
    const cities = useSelector(store => store.cities);
    const [search, setSearch] = useState("");

    const onHandleChange = (e) => {
        setSearch(e.target.value);
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(getNewCity(search));
        setSearch('');
    }

    return(
        <Div>
            <div>
                <form onSubmit={onHandleSubmit}>
                    <Input type="text" name="search" onChange={(event) => onHandleChange(event)} value={search} />
                </form>
            </div>
            <div>
                {cities && cities.map( city => {
                    return (
                        <Card 
                        key={city.id}
                        name={city.name} 
                        country={city.sys.country} 
                        main={city.weather[0].main} 
                        icon={city.weather[0].icon}
                        temp={city.main.temp}
                        id={city.id}
                        />
                    )
                })}
            </div>
        </Div>
    )
}

export default SearchBar;