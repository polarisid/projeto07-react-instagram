import ReactDOM from 'react-dom';

const minhaTela = document.querySelector(".root");

function RenderHTML(){
    return(
        <h1>Title content</h1>
    );
}

const htmltela1 = RenderHTML();

ReactDOM.render(htmltela1, minhaTela);