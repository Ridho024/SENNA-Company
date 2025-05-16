import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './section/HeroSection'
import Router from './routes/Router';

function App() {

  return (
    <div className="min-h-screen">
      <Router />
    </div>
  )
}

export default App
