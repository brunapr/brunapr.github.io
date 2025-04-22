export default function Moon() {
  const commonStyle = "moving-object absolute rounded-full"
  const moon = [
    { dataValue: 1, className: `${commonStyle} bg-violet-200 dark:bg-slate-100 w-[32rem] h-[32rem]` },
    { dataValue: 3, className: `${commonStyle} bg-slate-300/20 dark:bg-slate-300/5 w-[48rem] h-[48rem]` },
    { dataValue: 4, className: `${commonStyle} bg-slate-300/20 dark:bg-slate-300/5 w-[64rem] h-[64rem]` },
    { dataValue: 5, className: `${commonStyle} bg-slate-300/20 dark:bg-slate-300/5 w-[80rem] h-[80rem]` },
  ]

  return (
    <div className="absolute max-md:top-1/2 max-md:right-1/2 max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2 right-[30%] flex justify-center items-center duration-[1000ms] transition-all">
      {
        moon.map((ring, index) => {
          return <div
            key={"moon_ring_" + index}
            data-value={ring.dataValue}
            className={ring.className}
          />
        })
      }
    </div>
  );
}