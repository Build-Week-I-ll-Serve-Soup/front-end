import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return(
        axios.create({
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6InJ5YW5ubiIsImtpdGNoZW4iOjEsImlhdCI6MTU2OTYwMjc3NSwiZXhwIjoxNTY5NjMxNTc1fQ.F493sztO1CUn47x4MHVo1yyKxhu2RX89lku7ALzqWbk"
                }
            })
    )
}