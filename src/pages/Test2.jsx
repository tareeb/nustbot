import API_BASE_URL from "@/config"
import { useContext } from 'react';
import { CsrfTokenContext } from "@/context/CsrfTokenContext";

const Test = () => {

      const { csrfToken  } = useContext(CsrfTokenContext);

    
      async function createChatbot() {
        try {
          const response = await fetch(`${API_BASE_URL}/createchatbot/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
               'Authorization': `Token ${csrfToken}`,
            },
            body: JSON.stringify({ chatbotname: "project1" }),
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
        }
      }
    
      //getallchatbots

      async function getallchatbots() {
        try {
          const response = await fetch(`${API_BASE_URL}/getallchatbots/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
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
        }
      }

      //chatbotbyuser

      async function chatbotbyuser() {
        try {
          const response = await fetch(`${API_BASE_URL}/chatbotbyuser/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${csrfToken}`,
            },
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
        }
      }
    

    return (
        <div>
            <h1>Test Page</h1>
            
            <button onClick={createChatbot} > createChatbot </button>

            <button onClick={getallchatbots} > getallchatbots </button>

            <button onClick={chatbotbyuser} > chatbotbyuser </button>

        </div>
    );
};

export default Test;