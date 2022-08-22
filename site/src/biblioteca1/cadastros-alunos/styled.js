import styled from "styled-components";


const Container = styled.div`
    background: #808080;
    padding-bottom: 40rem;

    body {
        margin:-8px;
    }

    .text {
        padding-top: 2em;
        font: 400 2em Roboto;
        color: white;
        text-align: center;
    }

    .cadastros {
        flex-direction: row;
        margin: 3em;
        display: flex;
        align-content: center;
        justify-content: center; 
    }

    .alunos {
        margin-right: 2em;
    }

    .tabela {
        flex-direction: row;
        margin-bottom: 1em;
        display: flex;
        align-content: center;
        justify-content: center; 
    }

    .info {
        margin-right: 1em;
        margin-left: 1em;
    }
`


export { Container }
