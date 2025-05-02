import './App.scss';

const App: React.FC = () => {
    return (
        <div className="App">
            <nav className="navbar">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="logo" />
                <h1>დ   ო   შ</h1>
            </nav>
            <div className="content">
                <button className="button">?   ?   ?</button>
            </div>
            <footer className="footer">
                {/* <p>Footer Content</p> */}
            </footer>
        </div>
    );
};

export default App;