import { React } from 'react';
import './App.scss';
import FirstGallery from './components/FirstGallery';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';
import SecondGallery from './components/SecondGallery';
import ThirdGallery from './components/ThirdGallery';
import Settings from './components/Settings';
import Profile from './components/Profile';


function App() {
  return (
    <div className="App px-3">
      <MyNav />
      <MyMain />
      <FirstGallery />
      <SecondGallery />
      <ThirdGallery />
      <MyFooter />
      {<Profile />}
      {/* <Settings /> */}
    </div>
  );
}

export default App;
