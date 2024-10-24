import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Navbar(){
    return(      
    <NavBar>
        <OptionsContainer>
          <Option>
            <Link to="/">
              Inicío
            </Link>
          </Option>
          <Option>
            <Link to="/specialties">
              Especialidades
            </Link>
          </Option>
          <Option>
            <Link to="/locations">
              Centros de Saúde
            </Link>
          </Option>
          <Option>
            <Link to="/about-us">
              Sobre Nós
            </Link>
          </Option>
        </OptionsContainer>
      </NavBar>
      )
}

const NavBar = styled.header`
    background: linear-gradient(180deg, rgb(19, 96, 132) 0%, rgb(12.27, 51.69, 70.13) 100%);
    height: 68px;
    text-shadow: 0px 2px #000000;
    a {
    color: white;
    text-decoration: none; /* no underline */
    }
`

const OptionsContainer = styled.div`
  margin-left: 40vw;
  display: flex;
  gap: 20px;
`;

const Option = styled.div`
  margin-top: 25px;
`