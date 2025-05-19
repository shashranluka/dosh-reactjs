import './App.scss';
import { Link } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
                <h1>დ   ო   შ</h1>
            </nav>
            <div className="content">
                <a className="link" href="https://dashni.dosh.ge" target="_blank" rel="noopener noreferrer">
                    <div className="feature">დ ა შ ნ ი</div>
                </a>
            </div>
            <footer className="footer">
                {/* <p>Footer Content</p> */}
            </footer>
        </div>
    );
};

export default App;