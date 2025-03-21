import Layout from './components/Layout';
import Flyer from './components/Flyer';
import RSVPButton from './components/RSVPButton';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>LEiNK</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      
      <Layout>
        <div className="w-full flex flex-col items-center space-y-6">
          <Flyer />
          <RSVPButton />
        </div>
      </Layout>
    </>
  )
}

export default App
