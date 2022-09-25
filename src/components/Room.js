import '../assets/Index.css'
import {useEffect, useState} from "react";
import Messages from "./Messages";
import toast from "react-hot-toast";
import {socket} from "../Socket";
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, getAllMessages } from '../features/messages/messageSlice';

const Room = () => {
    const [message, setMessage] = useState('')

    

    const allMessage = useSelector(getAllMessages);
    const dispatch = useDispatch();

    console.log(allMessage)

    useEffect(() => {
        socket.on('chat message', (msg)=> {
            dispatch(addMessage({sender: 'notme', data: msg}))
        });
    },[socket] )

    const sendMessage = (e) => {
        e.preventDefault();

        if (message.length > 1) {
            socket.emit('chat message', message);
            dispatch(addMessage({sender: 'me', data: message}))
            setMessage('');
        }

    }


    return (
        <div className="card">
            <h1>Liste des messages</h1>
            <Messages messages={allMessage} />
            <form onSubmit={sendMessage} className="send-message">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <input type="submit"/>
            </form>
        </div>
    )

}

export default Room