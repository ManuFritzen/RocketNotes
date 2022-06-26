import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/manufritzen.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem-vinda</span>
          <strong>Emanuelle Fritzen Machado</strong>

        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

      
    </Container>
  )
}