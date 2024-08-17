import './App.css'
import Die from './component/Die'
import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'


function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{
    const checkAllHelds = dice.every(die=> die.isHeld)
    const firstValue = dice[0].value 
    const checkAllValues = dice.every(die => die.value === firstValue)
    if(checkAllHelds && checkAllValues){
      console.log("You win...")
      setTenzies(true)
    }
  },[dice])

  function generateNewDie(){
    return{
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }
  
  function allNewDice(){
    const newDice = []
    for(let i=0; i<10; i++){
      newDice.push(generateNewDie())
    }
    return newDice 
  }

  function onRoll(){
    if(!tenzies){
      setDice( oldDice => oldDice.map(die=>
        die.isHeld ? die : generateNewDie()
      ))
    }
    else{
      setDice(allNewDice())
      setTenzies(false)
    }
  }

  function holdDie(id){
      setDice(oldDice=> oldDice.map(die=>
        die.id === id ? {...die, isHeld: !die.isHeld} : die
      ))

  }

  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value} 
      isHeld={die.isHeld}
      holdDie={()=>holdDie(die.id)}
    />
  ))

  return (
    <main>
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button 
        className='btn-roll'
        onClick={onRoll}>
          { tenzies ? "New Game" : "Roll" } 
      </button>
    </main>

  )
}

export default App