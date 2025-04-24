import { useMemo } from "react";
import { THEME, useThemeStore } from "../../stores/themeStore";
import { getRandomNumber } from "../../utils/getRandomNumber";

export function Stars() {
  const { theme } = useThemeStore()

  const stars = useMemo(() => 
    Array.from({ length: getRandomNumber(20, 100) }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2
    })), 
    []
  );

  if (theme === THEME.LIGHT) return null

  return (
    <div data-value="0" className="moving-object w-full h-full absolute top-0 left-0">
      {stars.map((star, index) => (
        <div
          key={"star_" + index}
          className="absolute w-[2px] h-[2px] rounded-full bg-white animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}