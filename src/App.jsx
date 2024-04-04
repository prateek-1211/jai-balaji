import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import Expertise from "./components/Expertise";
import ChatBot from 'react-simple-chatbot';
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Feedback/>
      <Expertise />
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hello Sir/Maam This is my address',
            trigger: '2',
          },
          {
            id: '2',
            options: [
              { value: 2, label: 'Gwalior', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Nai Sadak, kailash Talkies, Lashkar, Gwalior(district of M.P.)',
            trigger: '2',
          },
        ]}
        floating={true}/>
      <Footer />
    </>
  );
}

export default App;