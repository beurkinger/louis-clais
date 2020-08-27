import { h, FunctionComponent, ComponentChildren } from 'preact';
import BackToTop from '../BackToTop/BackToTop';
import Header from '../Header/Header';
import './App.css';

interface Props {
  children: ComponentChildren;
}

const App: FunctionComponent<Props> = ({ children }: Props) => (
  <div className="app">
    <div className="app-left-column">
      <div className="app-left-column-content">
        <Header />
      </div>
    </div>
    <div className="app-right-column">
      <div className="app-right-column-content">{children}</div>
    </div>
    <BackToTop />
  </div>
);

export default App;
