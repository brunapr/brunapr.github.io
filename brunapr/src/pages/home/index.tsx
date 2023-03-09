import Hover from '../../components/cursor';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import './styles.css';

export default function Home() {
  const { width } = useWindowDimensions();
  
  return(
    <div id="home" className="slide-child-wrapper">
      <div className="home-paper">
        <span>B</span>
        <span>R</span>
        <span>U</span>
        <span>N</span>
        <span>A</span>
      </div>
      {
        width > 360 ?
        <div className="home-description">front-end developer and ui/ux designer</div> :
        <div className="home-description">front-end developer <br/>and ui/ux designer</div>
      }
    </div>
  );
}