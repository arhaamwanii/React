import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App(){
  return(
    <>
    <Card userName="arhaam-amin"/>
    <Card btnText="passText"/>
    </>
  )
}

export default App