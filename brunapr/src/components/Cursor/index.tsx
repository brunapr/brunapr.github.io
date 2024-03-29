import { useContext } from "react";
import { MouseContext } from "../../contexts/mouseContext";

export default function Hover(props:any) {
  const { cursorChangeHandler } = useContext(MouseContext);
  
  return(
    <div
      style={props.style}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {props.children}
    </div>
  );
}