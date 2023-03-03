import Hover from '../../components/cursor';
import './styles.css';

export default function Home() {
  return(
    <div className="home">
      <Hover>
        <div className="home-paper">
          <span>B</span>
          <span>R</span>
          <span>U</span>
          <span>N</span>
          <span>A</span>
        </div>
      </Hover>
      <div className="home-description">front-end developer and ui/ux designer</div>
    </div>
  );
}