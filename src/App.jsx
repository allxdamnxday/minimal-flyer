import Background from './components/Background';
import Logo from './components/Logo';
import Flyer from './components/Flyer';
import RSVPButton from './components/RSVPButton';
import EventInfo from './components/EventInfo';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      <Helmet>
        <title>LEiNK</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <Background />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]"></div>
      
      <Logo />
      
      <div className="relative z-[2] h-screen flex flex-col justify-center items-center px-8 animate-fade-in">
        <Flyer />
        <RSVPButton />
      </div>
      
      <EventInfo />
    </div>
  )
}

export default App
