import {BrowserRouter,Routes,Route} from "react-router-dom";

  
import Cadastros from "./biblioteca1/cadastros-alunos";



export default function Rotas (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cadastros/>} exact={true}/>
            </Routes>
        </BrowserRouter>
    );
}