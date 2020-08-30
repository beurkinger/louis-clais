import { h, render } from 'preact';
import Router from 'preact-router';
import App from './components/App/App';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import './index.css';

const Main = () => (
  <App
    childrenLeft={<HeaderPage />}
    childrenRight={
      <Router>
        <ArticlePage path="/post/:articleId" />
        <ArticlesPage default />
      </Router>
    }
  />
);

const root = document.getElementById('root');
if (root) render(<Main />, root);
