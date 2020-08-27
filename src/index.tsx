import { h, render } from 'preact';
import Router from 'preact-router';
import App from './components/App/App';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import './index.css';

const Main = () => (
  <App>
    <Router>
      <ArticlePage path="/post/:articleId" />
      <ArticlesPage default />
    </Router>
  </App>
);

const root = document.getElementById('root');
if (root) render(<Main />, root);
