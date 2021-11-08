import { useState } from 'react';
import './App.css';
import Builder from './components/Builder';
import Code from './components/Code';
import Output from './components/Output';

import styles from './App.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'

const App = () => {

  const initialBuilderData = {
    className: 'footer',
    text: 'Sample Text',
    fontSize: '16',
    fontWeight: '400',
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
      <a href="https://github.com/CharlesDesiderio/footer-maker" rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      <h1>Footer Builder</h1>
      <div className={styles.build}>
        <Builder data={builderData} handleChange={(event) => handleChange(event)} />
        <Code data={builderData} />
      </div>
      <h3>Output: </h3>
      <Output data={builderData} />
    </div>
  )
}

export default App