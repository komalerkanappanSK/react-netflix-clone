import React , {useState, useEffect} from 'react';
import axios from './axios';

function Row({tittle, fetchUrl }) {
const [movies, setMovies] = useState([]); // empty movie array

    useEffect(() => {

         async function fetchData() {
             const request = await axios.get(fetchUrl);
             setMovies(request.data.results);
             return request;
         }
         fetchData();
    }, []); // if [], run once when the row loads , and dont run again




    return (
        <div>
            {/* tittle*/}
            <h2>{tittle}</h2>


            {/* container -> poster*/}
        </div>
    )
}

export default Row
