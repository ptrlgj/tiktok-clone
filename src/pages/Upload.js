import axios from 'axios';
import React, { useState } from 'react';

function Upload() {
  const id = new Date().getMilliseconds()
  const username = "xXx_G1G4CH4D_xXx";
  const name = "ptr lgj";
  const avatar = "https://i.imgur.com/8OwBnab.png";
  // const id = faker.random.uuid();
  const [video, setVideo] = useState('')
  const [caption, setCaption] = useState('')
  const data = {
    id,
    name,
    username,
    avatar,
    is_followed: false,
    likes: 0,
    comments: 0,
    timestamp: new Date().toISOString(),
    video: video,
    caption: caption,
    button_visible: false,
  }
  async function handleSubmit(e) {
    e.preventDefault()
    axios.post('/.netlify/functions/addPost', data)
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.error(err)
    })
  }
  return (
    <section className="upload">
        <h1>Upload new tiktok</h1>
        <p>this video will be published to @{username}</p>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="caption">caption</label>
          <input 
            id="caption"
            type="text" 
            onChange={(e) => setCaption(e.target.value)}  
          />
          </div>
          <div>
          <label htmlFor="url">video url</label>
          <input 
            id="url" 
            type="text" 
            onChange={(e) => setVideo(e.target.value)}  
          />
          </div>
          <button>post!</button>
        </form>
    </section>
  )
}

export default Upload