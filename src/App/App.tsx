import { h } from 'preact';
import BackToTop from './BackToTop/BackToTop';
import Header from './Header/Header';
import Main from './Main/Main';
import './App.css';

const App = () => (
    <div id="app">
        <Header/>
        <Main/>
        <BackToTop/>
    </div>
);

export default App;