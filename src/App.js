import { useState } from 'react';
import './App.css';
import Builder from './components/Builder';
import Code from './components/Code';
import Output from './components/Output';

const App = () => {

  const initialBuilderData = {
    className: 'footer',
    text: 'Sample Text',
    fontSize: '16',
    padding: '8',
    color: '#ffffff',
    backgroundColor: '#000000'
  }

  const [builderData, setBuilderData] = useState(initialBuilderData)

  const handleChange = (event) => {
    let newData = builderData
    newData[event.target.id] = event.target.value
    setBuilderData({...newData})
  }

  return (
    <div>
      <Builder data={builderData} handleChange={(event) => handleChange(event)} />
      <Output data={builderData} />
      <Code data={builderData} />
    </div>
  )
}

export default App