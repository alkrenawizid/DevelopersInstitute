import './App.css';
import BootstrapCard from './component/BootstrapCard';
import Jumbotron from './component/Jumbotron';
import McCartney from './component/McCartney';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const props = {
    title: "McCartney",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg",
    buttonLabel: "Go to Wikipedia",
    buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
    description: "Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles."

  }
  return (
    <>
      <BootstrapCard data={props} />
      <Jumbotron data={props} />
      <McCartney data={props} />
    </>
  );
}

export default App;
