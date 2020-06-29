import React,{useState,useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css'

const Chat= ({location}) => {
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search);
        console.log(name,room);
        setName(name);
        setRoom(room)
    })

    return(
        <div>
            <h1>Heyy! welcome to chat</h1>
        </div>
    )
}

export default Chat;