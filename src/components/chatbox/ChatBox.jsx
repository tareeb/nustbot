import Message from "@/components/message/Message"
import ChatInput from "@/components/chatinput/ChatInput"

import PropTypes from 'prop-types';
 
import "./ChatBox.css"

function ChatBox({messages , setInput  , input, onSend , loading}) {

    return (
    <>
      <div className="space-y-2">
        <div className="messagearea">
            {messages.map((message , index) => (
                <Message key={index} text={message.text} user={message.user} />
            ))}
        </div>
        
        <ChatInput 
            setInput={setInput} 
            onSend={onSend}
            input={input}  
            loading={loading}
            />
     
      </div>
    </>
    )
}

ChatBox.propTypes = {
    messages: PropTypes.array.isRequired,
    input: PropTypes.string.isRequired,
    onSend: PropTypes.func.isRequired,
    setInput: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default ChatBox
  