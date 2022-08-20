import { Container } from './styled'

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
              <div className="">nome <input type="text" id="lname" name="lname"/></div>
            </div>
            <br/>
            <div className="livros">
              livros cadastro
              <div className="">livro <input type="text" id="lname" name="lname"/></div>

              <div className="">descrição <input type="text" id="lname" name="lname"/></div>
            </div>
          </div>

          <div className="tabela text"> tabela</div>

          <div className="tabela">
              <div className="info"> livro </div>     
              <div className="info"> descrição </div>  
              <div className="info"> nome aluno </div>  
              <div className="info"> id </div> 
          </div>


      </div>
    </Container>
  );

}
