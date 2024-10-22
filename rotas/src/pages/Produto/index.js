import { Link } from "react-router-dom";
import gatoNoiado from "./../../assets/gatoNoiado.jpeg"

function Home(){
    return(
        <div>
            <h1>Bem-vindo à página PRODUTO</h1>

            <Link to='/home'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>

            <img src={gatoNoiado} />
        </div>
    );
}

export default Home;