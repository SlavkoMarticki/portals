import React, {useState} from 'react'
import Modal from './Modal'

export default function App() {
    const [isOpen, setIsOpetn]  = useState(false);
  return (
    <div>
        <h1>App</h1>
        <button onClick={() => setIsOpetn(!isOpen)}>Open Modal</button>

        <Modal isOpen={isOpen}>

        </Modal>
    </div>
  )
}
