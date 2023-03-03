import Hover from '../cursor';
import './styles.css';

export default function SlideDots(
    props: {
      slide: number,
      setSlide: React.Dispatch<React.SetStateAction<number>>
    }
  ) {
  return(
    <div className="dots-wrapper">
        <Hover>
          <div 
            className={`slider-dot ${props.slide == 1 && "dot-grow"}`}
            onClick={() => {props.setSlide(1)}}
          />
          <div 
            className={`slider-dot ${props.slide == 2 && "dot-grow"}`}
            onClick={() => {props.setSlide(2)}}
          />
          <div 
            className={`slider-dot ${props.slide == 3 && "dot-grow"}`}
            onClick={() => {props.setSlide(3)}}
          />
          <div 
            className={`slider-dot ${props.slide == 4 && "dot-grow"}`}
            onClick={() => {props.setSlide(4)}}
          />
        </Hover>
      </div>
  );
}