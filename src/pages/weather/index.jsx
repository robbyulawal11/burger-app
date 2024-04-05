"use client";

import { useEffect, useState } from "react";
import { useFetch } from "../../utils/useFetch";
import {  useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';


const Weather = () => {
    const { listOfAllCity } = useSelector((state)=> state.weather);
    const [city, citySet] = useState("jakarta");
    const [weather, weatherSet] = useState([]);
    const {fetcher, data, isLoading} = useFetch();
    
    useEffect(() => {
        fetcher(`/weather?city=${city}`);
        weatherSet(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]); 

    console.log(isLoading);
    console.log(data)
    return ( 
        <div className="container">
            <h2>Cuaca Hari ini</h2>
            <Form.Select className="w-50" aria-label="Default select example" onChange={(value) => citySet(value.target.value)}>
                {listOfAllCity.map((city, i) => (
                    <option key={i} value={city} >{city}</option>
                ))}
            </Form.Select>
            <table>
                <tr>
                    <th>Kota</th>
                    <th>suhu</th>
                </tr>
                {weather &&                 
                <tr>
                    <td>{city}</td>
                    <td>{weather.temp}</td>
                </tr>}
            </table>

        </div>
     );
}
 
export default Weather;