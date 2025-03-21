import Background from './components/Background';
import Logo from './components/Logo';
import Flyer from './components/Flyer';
import RSVPButton from './components/RSVPButton';
import EventInfo from './components/EventInfo';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
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
