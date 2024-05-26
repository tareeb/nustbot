import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import { Toaster } from "@/components/ui/sonner"


import Chat from "@/pages/Chat"
import ChatAdvanced from "@/pages/ChatAdvanced"
import Chatbot from "@/pages/Chatbot"
import Test from "@/pages/Test"
import Test2 from "@/pages/Test2"
import NotFound from '@/pages/NotFound';
import Login  from '@/pages/Login';
import Signup from '@/pages/Signup';
import Admin from '@/pages/Admin';
import Home from '@/pages/Home';
import BrowseAll from '@/pages/BrowseAll';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/"                 element={<Home></Home>}       />
          <Route path="/login"                  element={<Login></Login>}     />
          <Route path="/signup"                 element={<Signup></Signup>}   />
          <Route path="/chatbot/:chatbotname"   element={<Chatbot></Chatbot>} />
          <Route path="/admin"                  element={<Admin></Admin>}     />

          <Route path="/browseall"              element={<BrowseAll></BrowseAll>}  />
          
          <Route path="/chat/:chatbotname"         element={<Chat></Chat>}   />
          <Route path="/chatadvanced/:chatbotname" element={<ChatAdvanced></ChatAdvanced>} />

          <Route path="/test"                   element={<Test></Test>}         />
          <Route path="/test2"                  element={<Test2></Test2>}       />
          <Route path="*"                       element={<NotFound></NotFound>} />     
      </Routes>
    </Router>
    <Toaster />
    </>
  );
}

export default App
