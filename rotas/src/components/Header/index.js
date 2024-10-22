import { Link } from "react-router-dom";
import './Header.css';

function Header(){
    return (
        <header>
            <h2>Jão</h2>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/sobre'>Sobre</Link>
                <Link to='/contato'>Contato</Link>
                <Link to='/produto'>Produto</Link>
            </div>
        </header>
    );

    <style>
        
    </style>
}

export default Header;