import { h, render } from 'preact';
import Router from 'preact-router';
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import './index.css';

const Main = () => (
	<Router>
		<ArticlePage path="/post/:articleId" />
		<ArticlesPage default />
	</Router>
);

const root = document.getElementById('root');
if (root) render(<Main/>, root);
