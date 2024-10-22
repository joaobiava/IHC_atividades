import { Link } from "react-router-dom";

function Erro(){
    return(
        <div>
            <h1>VC TÁ QUERENDO SER TATU, PARE COM ISSO</h1>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
            <Link to='/produto'>Produto</Link>

        </div>
    );
}

export default Erro;