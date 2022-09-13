const Message = ({message}) => {

    return (
        <div className={message.sender === 'me' ? 'message sent' : 'message receive'}>
            {message.data}
        </div>
    )
}

export default Message