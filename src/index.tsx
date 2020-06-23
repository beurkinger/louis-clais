import { h, render } from 'preact';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
// import ArticlePage from './pages/ArticlePage/ArticlePage';
import './index.css';

const root = document.getElementById('root');
if (root) render(<ArticlesPage/>, root);

// if (root) render(<ArticlePage articleId="5db86f0f383362170c000377" />, root);

