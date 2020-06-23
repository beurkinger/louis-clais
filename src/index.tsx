import { h, render } from 'preact';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import './index.css';

const root = document.getElementById('root');
if (root) render(<ArticlesPage/>, root);
