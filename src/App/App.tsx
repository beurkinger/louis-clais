import { h, FunctionComponent } from 'preact';
import Articles from '../components/Articles/Articles';
import BackToTop from '../components/BackToTop/BackToTop';
import Header from '../components/Header/Header';
import './App.css';

const App: FunctionComponent = () => (
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