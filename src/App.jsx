import react from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      {/* working on connecting the below line of code to the matching one on Personard.js How to format this? */}
      <PersonCard firstName="Jane" lastName="Doe" age={45} hcolor="Black"/>
      <PersonCard firstName="John" lastName="Smith" age={88} hcolor="Brown"/>
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hcolor="Brown"/>
      <PersonCard firstName= "Maria" lastName="Smith" age={62} hcolor="Brown"/>
    </div>
  );
}

export default App;
