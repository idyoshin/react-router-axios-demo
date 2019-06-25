import React ,  {useState, useEffect} from 'react';

import axios from 'axios';



export const ViewSingle = (props) => {

    // 1.  Каким-то образом узнать идентификатор из адресной строки

    console.log(props);

    // Определили идентификатор

    const id = props.match.params.id;

    console.log(id);




    // 2.  По идентификатору адресной строки получить данные из сервера. И вывести на экран.
    const [data, setData] = useState(null);

    const fetchData = () => {
        axios.get("/api/questionary/" + id)
            .then(
                (response) => setData(response.data)
            )
    }

    useEffect(
        fetchData, 
        [id]
    )



    const renderData = () => {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>surname</td> 
                            <td>{data.surname}</td> 
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <td>patronymic</td>
                            <td>{data.patronymic}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


    return (
        <div>
            {(data == null) ? null : renderData()}
        </div>
    )
}