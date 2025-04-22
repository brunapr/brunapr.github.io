import { THEME, useThemeStore } from "../../stores/themeStore";
import { getRandomNumber } from "../../utils/getRandomNumber";

export function Stars() {
  const { theme } = useThemeStore()

  if (theme === THEME.LIGHT) return null

  return (
    <div data-value="0" className="moving-object w-full h-full absolute top-0 left-0">
      {Array.from({ length: getRandomNumber(20, 100) }).map((_, index) => (
        <div
          key={"star_" + index}
          className="absolute w-[2px] h-[2px] rounded-full bg-white animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );
}