
import './App.scss';
import FirstGallery from './components/FirstGallery';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';
import MyNav from './components/MyNav';
import SecondGallery from './components/SecondGallery';
import ThirdGallery from './components/ThirdGallery';


function App() {
  return (
    <div className="App px-3">
      <MyNav />
      <MyMain />
      <FirstGallery />
      <SecondGallery />
      <ThirdGallery />
      <MyFooter />
    </div>
  );
}

export default App;
