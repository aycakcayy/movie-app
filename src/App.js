import  NavigationBar  from "./components/NavigationBar";
import Routers from "./router/Routers";
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import {useEffect} from  "react"



function App() {

  const dispatch = useDispatch()
  const location = useLocation()
  const { theme} = useSelector((state) => state)

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);
  

  return (
    <>
    
      <NavigationBar />
      <Routers />
    </>
  )
}

export default App
