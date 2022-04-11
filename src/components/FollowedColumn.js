import React, { useState } from 'react'
import FollowedCard from './FollowedCard';

function FollowedColumn({followed}) {
  return (
    <article className='followed-column'>
      <h3>Followed accounts</h3>
      <section className="followed-cards">
        {followed.map(user=>{
          return <FollowedCard 
            key={user.id}
            {...user}
          />
        })}
      </section>
    </article>
  )
}

export default FollowedColumn