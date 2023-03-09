import { useState } from "react";

const useForceRerender = () => {
  const [, setValue] = useState(0); 
  return () => setValue(value => value + 1);
};

export default useForceRerender;