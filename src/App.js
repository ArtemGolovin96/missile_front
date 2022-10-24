import logo from './logo.svg';
import './App.css';
import { isMobile } from 'react-device-detect';
import MobileAppView from './Mobile/MobileView.tsx';
import BrowserAppView from './Browser/BrowserView.tsx';

const App = () => {
  //Перепишется на switch
     return isMobile ? <div className='App'><MobileAppView /></div> 
        : <div className='App'><BrowserAppView /></div>
}

export default App;
