import "./chatinput.css";
import PropTypes from 'prop-types';

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"


function ChatInput({setInput , onSend , input , loading}) {
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };

    const handleonClick = () =>{
      console.log(input);
      console.log(loading);
      if(input === "") return
      if(input.trim() === "") {
        setInput("");
        return
      }
      onSend();
    }

    return (
      <div className="chatinput">
        <textarea placeholder="Enter Your Query Here ?" 
            onChange={handleChange}  
            value={input}
        ></textarea>
        
        <Button onClick={handleonClick} disabled={loading}>
            {loading ? 
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                : "Send"
            }
        </Button>

      </div>
    )
}

ChatInput.propTypes = {
    setInput: PropTypes.func.isRequired,
    input: PropTypes.string.isRequired,
    onSend: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}
  
export default ChatInput
  