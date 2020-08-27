import { h, FunctionComponent } from 'preact';
import IconArrowTop from '../IconArrowTop/IconArrowTop';
import './ArrowButton.css';

const ArrowButton: FunctionComponent = () => (
  <div className="arrow-button">
    <IconArrowTop />
  </div>
);

export default ArrowButton;
