import '../assets/Index.css'
import {useEffect, useState} from "react";
import socketIO from 'socket.io-client';
import Messages from "./Messages";
import toast from "react-hot-toast";
import {socket} from "../Socket";

const Room = () => {
    const [messages,setMessages] = useState([])
    const [message, setMessage] = useState('')


    useEffect(() => {
        socket.on('chat message', (msg)=> {
            setMessages(oldArray => [...oldArray, {sender: 'notme', data: msg}])
        });
    }, [socket])
    console.log(messages)

    const sendMessage = (e) => {
        e.preventDefault();

        if (message.length > 1) {
            socket.emit('chat message', message);
            setMessages(oldArray => [...oldArray, {sender: 'me', data: message}])
            setMessage('');
        }

    }


    return (
        <div className="card">
            <h1>Liste des messages</h1>
            <Messages messages={messages} />
            <form onSubmit={sendMessage} className="send-message">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default Room