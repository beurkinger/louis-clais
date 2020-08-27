import { h, FunctionComponent, ComponentChildren } from 'preact';
import BackToTop from '../BackToTop/BackToTop';
import Header from '../Header/Header';
import style from './App.css';

interface Props {
  children: ComponentChildren;
}

const App: FunctionComponent<Props> = ({ children }: Props) => (
  <div className={style.app}>
    <div className={style.appLeftColumn}>
      <div className={style.appLeftColumnContent}>
        <Header />
      </div>
    </div>
    <div className={style.appRightColumn}>
      <div className={style.appRightColumnContent}>{children}</div>
    </div>
    <BackToTop />
  </div>
);

export default App;
