import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import FollowedColumn from '../components/FollowedColumn';
import axios from 'axios';
import SuggestedCard from '../components/SuggestedCard';

function Home() {

  const [users, setUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([])
  const [suggestedUsers, setSuggestedUsers] = useState([])
  const [userToToggle, setUserToToggle] = useState(null)
  const addData = async () => {
    await axios.post('/.netlify/functions/addData')
  }

  const fetchData = async () => {
    const result = await axios.get('/.netlify/functions/posts');
    setUsers(result.data);
    setFollowedUsers(result.data.filter(user => user.is_followed).sort((a,b) => b.likes - a.likes));
    setSuggestedUsers(result.data.filter(user => !user.is_followed).sort((a,b) => b.likes - a.likes));
  }

  // console.log(userToToggle)
  if(userToToggle){
    const newValue = userToToggle.is_followed ? false : true;
    const data = {
      is_followed: newValue,
    }
    axios.put('/.netlify/functions/editUser',{userId: userToToggle.id, data: data})
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error=>console.error(error))
      .then(()=>fetchData())
      setUserToToggle(null);
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
        {<FollowedColumn 
          followed = {followedUsers}
        />}
        <div className='feed'>
            {users.map(user => {
              return <Card key={user.id} 
                user = {user}
                toggleFollow = {userToToggle => setUserToToggle(userToToggle)}
              />
            })}
        </div>
        <div className='suggested-column'>
          <h3>Suggested accounts</h3>
          <section className="suggested--cards">
            {suggestedUsers.map(suggestedUser => {
              return <SuggestedCard 
              key={suggestedUser.id}
              suggestedUser={suggestedUser}
              toggleFollow={userToToggle=> setUserToToggle(userToToggle)}/>
            })}
          </section>
        </div>
    </>
  )
}

export default Home