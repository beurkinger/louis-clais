import { h, FunctionComponent, ComponentChildren } from 'preact';
import BackToTop from '../BackToTop/BackToTop';
import style from './App.css';

interface Props {
  childrenLeft: ComponentChildren;
  childrenRight: ComponentChildren;
}

const App: FunctionComponent<Props> = ({
  childrenLeft,
  childrenRight,
}: Props) => (
  <div className={style.app}>
    <div className={style.appLeftColumn}>
      <div className={style.appLeftColumnContent}>{childrenLeft}</div>
    </div>
    <div className={style.appRightColumn}>
      <div className={style.appRightColumnContent}>{childrenRight}</div>
    </div>
    <BackToTop />
  </div>
);

export default App;
