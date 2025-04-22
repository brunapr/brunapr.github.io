export function Clouds() {
  const commonStyle = "moving-object absolute opacity-20 animate-move transition-all"

  const clouds = [
    {
      src: "/assets/cloud_3.svg",
      move: "-10",
      duration: "8s",
      className: `${commonStyle} left-[-5rem] top-10 scale-80 lg:scale-80 lg:left-0 lg:top-10`,
      alt: "top left cloud"
    },
    {
      src: "/assets/cloud_2.svg",
      move: "5",
      duration: "10s",
      className: `${commonStyle} bottom-6 left-[-15rem] scale-80 lg:scale-80 lg:bottom-10 lg:left-[-10rem]`,
      alt: "bottom left cloud"
    },
    {
      src: "/assets/cloud_1.svg",
      move: "15",
      duration: "6s",
      className: `${commonStyle} right-[-10rem] md:right-[-4rem] bottom-46 scale-80 lg:scale-80`,
      alt: "middle right cloud"
    },
  ];


  return (
    <div className="w-full max-w-5xl h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {clouds.map((cloud, index) => (
        <img
          key={"cloud_" + index}
          data-value={cloud.move}
          style={{ animationDuration: cloud.duration }}
          src={cloud.src}
          className={cloud.className}
          alt={cloud.alt}
        />
      ))}
    </div>
  );
}