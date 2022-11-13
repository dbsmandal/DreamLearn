import React, { useState } from 'react'
import { useEffect } from "react"
import axios from 'axios'

const Learn = () => {
    const [demoClass, setDemoClass] = useState([]);
    useEffect(() => {
        axios.get('https://ms-instagram-stories.herokuapp.com/api/instaStories/')
            .then((res) => {
                console.log('res', res);
                setDemoClass(res.data);
            })
    }, [])
    return (
        <div>
            <h3>Demo Classes</h3>
            {demoClass.map((data) => {
                const { id, userName, bio, video } = data;
                return (
                    <div key={id}>
                        <h2>{userName}</h2>
                        <p>{bio}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Learn
