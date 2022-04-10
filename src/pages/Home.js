import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import FollowersColumn from '../components/FollowersColumn';
import axios from 'axios';

function Home() {

  const [users, setUsers] = useState([]);
  
  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const result = await axios.get('/.netlify/functions/posts');
    console.log(result.data)
    setUsers(result.data)
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className='container'>
        <FollowersColumn />
        <div className='feed'>
            {users.map(user => {
              return <Card key={user.id} 
                {...user}
              />
            })}
        </div>
        <div className='suggested-box'></div>
    </div>
  )
}

export default Home