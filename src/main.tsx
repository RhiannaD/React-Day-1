import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App from './App'
import NavBar from './components/NavBar/NavBar'
import Card from './components/Card'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DropDown from './components/DropDown'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
    <NavBar/>
    <Card/>
    <DropDown/>
    
  </React.StrictMode>,
)
