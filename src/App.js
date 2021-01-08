import logo from './logo.svg';
import './App.css';

import NameCard from './components/Name';

function App() {
  return (

    <div className="App">
     <NameCard firstname="John" lastname="Smith" age={ 8 } hair="Brown" /> 
     <NameCard firstname="Joe" lastname="Lee" age={ 28 } hair="Blonde" /> 
     <NameCard firstname="Jim" lastname="Nance" age={ 56 } hair="Brown" /> 
     <NameCard firstname="Rick" lastname="Sanchez" age={ 10000 } hair="Brown" /> 
    </div>
    
  );
}

export default App;
