import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

function FetchBreakingBadData() {
    const [data, setData] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios("https://api.breakingbadquotes.xyz/v1/quotes")
                const data = response.data;
                console.log(data);
                setData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [])
return (
    <div>
        {data && data.map((quote, index) => (
            <>
            <h1 key={index}>{quote.quote}</h1>
            <p>{quote.author}</p>
            </>
        ))}
    </div>
)
    

}

export default FetchBreakingBadData


