import { useState } from 'react';
import API_BASE_URL from "@/config";
import { useContext } from 'react';
import { CsrfTokenContext } from "@/context/CsrfTokenContext";

import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import propTypes from 'prop-types';

const CreateChatbot = ({setchatbots}) => {

    
    const { csrfToken  , handleUnauthorized } = useContext(CsrfTokenContext);
    const [ input , setInput ] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    const createchatbot = async () => {

        
        if (!input) {
            toast("Please write a name for chatbot.");
            return;
        }
        
        setIsLoading(true);
        
        try {
          console.log(input);

          const response = await fetch(`${API_BASE_URL}/createchatbot/`, {
            method: 'POST',
            body: JSON.stringify({ chatbotname: input }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${csrfToken}`,
            },
          });

          if (!response.ok) {
            if (response.status === 401) {
              handleUnauthorized();
              return;
            }
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to create new chatbot");
          }
        
          const data = await response.json();
          console.log(data);
          console.log(data.message); 
          setIsOpen(false);
          
          setchatbots((prevData) => ([...prevData, data.data]));
          
          toast("Chatbot Created Successfully");

        } catch (error) {
          console.error('Error submitting file:', error);
          toast.error(error || "Failed to create new chatbot");
          
        } finally {
          setInput("");   
          setIsLoading(false);
        }

      };
      

    return (
   
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Create</Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-[425px]">
        
        <DialogHeader>
          <DialogTitle>Create New Chatbot</DialogTitle>
          <DialogDescription>
            Please write a name that you want to give to your chatbot.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            
            <Label htmlFor="name" className="text-right">
              Name : 
            </Label>

            <Input
              id="name"
              className="col-span-3"
              type="text"
              value={input}
              accept="application/pdf" 
              onChange={(e) => setInput(e.target.value)}
            />

          </div>
        </div>
        
        <DialogFooter>
          
          <Button onClick={createchatbot} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create"}
          </Button>

          <DialogClose asChild>
            <Button type="button" variant="secondary"> 
              Cancel
            </Button>
          </DialogClose>

        </DialogFooter>
      </DialogContent>

    </Dialog>
     
    );
};

CreateChatbot.propTypes = {
    setchatbots: propTypes.func.isRequired,
}

export default CreateChatbot;