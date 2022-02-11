import { Navbar, Container, Nav } from "react-bootstrap"
import { useLocation} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {BiCameraMovie} from "react-icons/bi"
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { changeTheme } from "../reduxStore/themeChanger"
import { Link } from "react-router-dom"
import {MoonIcon, SunIcon, ThemeChangerButton} from  "../styledComponents/icons"



function NavigationBar() {


  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [clicked, setClicked] = useState(false)
    const { theme, user } = useSelector(state => state)

    function handleChange(value) {
      navigate(`${value}`);
    }


  return (
    <Navbar theme={theme} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
        <BiCameraMovie/>
           Movie App
        </Navbar.Brand>
       
       <select onChange={(event) => handleChange(event.target.value)}>
         <option value="/">Movies</option>
         <option value="popular">Popular</option>
         <option value="toprated">Top Rated</option>
       </select>


        <Nav className="ms-auto">

         

          
          <Nav.Link
            onClick={() => {
              navigate("/")
            }}
          >
            Home
          </Nav.Link>

          
          <Nav.Link
            onClick={() => {
              navigate("/login")
            }}
          >
            Login
          </Nav.Link>
          
                   

          <ThemeChangerButton theme={theme}
            onClick={() => dispatch(changeTheme(theme))}
        >
            {
                theme === "light" ? <MoonIcon /> : <SunIcon />
            }
        </ThemeChangerButton>
        
          

        </Nav>
      </Container>
    </Navbar>
  )
  

 
}

export default NavigationBar
