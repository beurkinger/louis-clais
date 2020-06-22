import { h } from 'preact';
import Articles from './Articles/Articles';
import BackToTop from './BackToTop/BackToTop';
import Header from './Header/Header';
import './App.css';

const App = () => (
    <div className="app">
        <div className="app-left-column">
            <div className="app-left-column-content">
                <Header/>
            </div>
        </div>
        <div className="app-right-column">
            <div className="app-right-column-content">
                <Articles/>
            </div>
        </div>        
        <BackToTop/> 
    </div>
);

export default App;