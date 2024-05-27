import ChatBox from "@/components/chatbox/ChatBox"
import API_BASE_URL from "@/config"

import { useState } from "react"
import { useParams } from 'react-router-dom';

import { toast } from "sonner";




function SideBotChat() {

    const [ input , setInput] = useState("")
    const [ messages , setMessages] = useState([])
    const { chatbotname } = useParams();
    const [ loading , setLoading] = useState(false);


    const sendMessage = async () => {

        setMessages([...messages , {text: input , user: true}]);

        getResponse(input)
        .then((response) => {
          setMessages((prevMessages) => [...prevMessages, { text: response, user: false }]);
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          toast.error('Failed to send message');
        });

        setInput("");
    }

    async function getResponse(query) {
      try {

        setLoading(true);

        const response = await fetch(`${API_BASE_URL}/${chatbotname}/chat/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ query }),
          credentials: 'include'

        });
        
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
    
        const data = await response.json();
        console.log(data);
        
        return data.response;

      } catch (error) {
        console.error('Error sending message:', error);
        throw error; 

      } finally {
        setLoading(false);

      }

    }
    

    return (
        <div className="px-2 h-full bg-gray-200 ">
          <ChatBox 
              setInput={setInput}
              messages={messages}
              input={input}
              onSend={sendMessage}
              loading={loading}
              sidebot={true}
          ></ChatBox>
        </div>
    )
  }
  
  export default SideBotChat
  