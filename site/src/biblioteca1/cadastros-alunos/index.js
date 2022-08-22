import { Container } from './styled'
import { Input } from '../../componentes/inputs'

export default function App() {

  return (
    <Container>
      <div className="App">
          <div className="text">
            Biblioteca
          </div>

          <div className="cadastros">
            <div className="alunos">
              alunos cadastro: 
              <div className="">nome <Input/></div>
              <div className="">email <input type="text" id="lname" name="lname"/></div>
            </div>
            <br/>
          </div>


      </div>
    </Container>
  );

}
