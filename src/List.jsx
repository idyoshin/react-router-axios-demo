import React, {useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';




export const List = (props) => {


    console.log(props);


    const [data, setData] = useState([]);



    /**
     * Loads all data from server
     */
    const fetchData = () => {
        axios.get("/api/questionary")
            .then(
                (serverData) => {
                    console.log(`Server data = ${JSON.stringify(serverData.data)}`);
                    setData(serverData.data);
                }
            )
    }


    /**
     * 
     * 
     * PROXY   
     * 
     * React   делает запрос по адресу "/api/questionary"   =>  "Сервер разработки "  =>  1. я могу обработать сам этот запрос  =>  обрабатывает и возвращает результат
     *                                                                                    2. он не может обработать этот запрос  =>  пытается найти прокси =>   http://localhost:5000/api/questionary 
     */



     // как только ты первый раз пытаешься отрисовать компоненты выполни запрос
    useEffect(
        // Функция которую нужно вызвать
        fetchData, 
        // Массив данных от которых теоретически функция зависит 
        // Если мы пробрасываем пустой массив - то этот вызов произойдет только 1 раз. 
        []
    )



    const dataRow = (person) => {
        return (
            <tr key={person._id}>
                <td>
                    <Link to={"/single/" + person._id}> Деталі </Link>
                </td>
                <td>
                    {person.surname}
                </td> 
                <td>
                    {person.name}
                </td>
            </tr>
        )
    }




    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>
                            Прізвище
                        </th>
                        <th>
                            Ім'я
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map(dataRow)
                    }

                </tbody>
            </table>
        </div>
    );
}