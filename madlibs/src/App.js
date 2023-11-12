
import { useState } from 'react';
import './App.css';
import MadlibForm from './MadlibForm';

function App() {
  let INITIALVALUE = {
    noun:"",
    color:"",
    noun2:"",
    adjective:""
}
  let [words, newWords] = useState(INITIALVALUE)
  let [toggle, newToggle] = useState(false)

  let addWords = fData => {
    let newW = {...fData}
    newWords(words => newW)
  }

  let toggleForm = () => {
    newToggle(() => !toggle)
  }

  let story = `There was a ${words.color} ${words.noun} who 
  loved a ${words.adjective} ${words.noun2}.`
  

  let restart = () => {
    newWords(INITIALVALUE)
    toggleForm()
  }


  return (
    <div>
    {toggle === false  ? <MadlibForm  add={addWords}
     tog={toggleForm}/> : story }
     {toggle ===true? <button onClick={restart}>Restart</button> : null}
    
    </div>
  );
}

export default App;
