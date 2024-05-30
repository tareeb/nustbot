import API_BASE_URL from "@/config";
import { toast } from "sonner";

import { useEffect } from 'react';
import { Link } from "react-router-dom";

import propTypes from 'prop-types';

const AllChatbotsGrid = ({chatbots , setchatbots}) => {


    useEffect(() => {
        getChatbots();
    }, []);

    async function getChatbots() {
        try {
            const response = await fetch(`${API_BASE_URL}/getallchatbots/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Failed to Fetch Data");
            }

            const data = await response.json();
            console.log(data);
            setchatbots(data.data);

            return data.response;
        } catch (error) {
            console.error('Failed to Fetch Data:', error);
            toast.error(error || "Failed to Fetch Data");
        }
    }


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    chatbots.map((chatbot, index) => (
                        <div key={index} className="p-10 flex flex-col text-center items-center justify-center shadow-lg
                                border-2 border-solid border-black rounded-lg bg-white bg-opacity-75
                                hover:bg-opacity-100 hover:shadow-xl transition duration-300 ease-in-out
                                space-y-4"
                                >
                            <h1 className="text-2xl font-bold select-none">{chatbot.name}</h1>
                            
                            <div className="space-y-2 flex flex-col">
                                <Link   className="bg-cyan-700 text-white border border-black  rounded-full py-1 px-2  text-sm hover:bg-black"
                                        to={`/chat/${chatbot.name}`}>SwiftChat</Link>
                                
                                <Link   className="bg-cyan-700 text-white border border-black  rounded-full py-1 px-2  text-sm hover:bg-black"
                                to={`/chatadvanced/${chatbot.name}`}>AdvancedChat</Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

AllChatbotsGrid.propTypes = {
    chatbots: propTypes.array.isRequired,
    setchatbots: propTypes.func.isRequired,
};

export default AllChatbotsGrid;

