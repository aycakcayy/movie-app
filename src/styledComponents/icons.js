import styled from "styled-components";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

const SunIcon = styled(BsSunFill)`
    &:hover {
        color: white;
    }
`

const MoonIcon = styled(MdDarkMode)`
    &:hover {
        color: white;
    }  
`

 const ThemeChangerButton = styled.button`
    border-radius: 50%;
    padding: 8px 15px;
    background-color: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    color:  ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    border: 2px solid #F05454;
    @media only screen and (max-width: 960px) {
        margin-right: auto;
        margin-left: 15px;
    }
    &:hover ${MoonIcon}  {
        transform: scale(1.5) rotate(360deg);
        color: white;
    }
    &:hover ${SunIcon}  {
        transform: scale(1.5) rotate(360deg);
        color: white;
    }
`


export { SunIcon, MoonIcon, ThemeChangerButton}