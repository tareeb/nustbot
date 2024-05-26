import "./Page.css";

import Title from "@/components/Title/Title";
import ButtonContainer from "@/components/Containers/ButtonContainer";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AllChatbotsGrid from "@/components/Grids/AllChatbotsGrid";

const BrowseAll = () => {

    const [chatbots, setchatbots] = useState([]);

    return (
        <>
            <div className="browseallPage">
                <div>
                    <Title title="Browse All Public Chatbots" />
                </div>
                
                <div>
                    
                    <div className="px-4 md:px-10 lg:px-40 py py-6">
                        <ButtonContainer title="Start Creating Your Own Now">
                            <Button asChild>
                                <Link to="/login" >Login Now</Link>
                            </Button>
                        </ButtonContainer>
                    </div>

                    <div className="px-4 md:px-10 lg:px-40 py-6">
                        <AllChatbotsGrid chatbots={chatbots} setchatbots={setchatbots}/>
                    </div>
                    
                </div>
            </div>
            
        </>
    );
};

export default BrowseAll;