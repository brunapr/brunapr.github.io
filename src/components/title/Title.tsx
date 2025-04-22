export default function Title({
  letter,
  borderColor,
  text
}: {
  letter: string,
  borderColor: string,
  text: string
}) {
  return (
    <h1>
      <span className={`${borderColor} bs-rg text-5xl text-slate-100 bg-indigo-600 px-3 py-[0] mr-1 rounded-lg border-2 border-dashed`}
      >{letter}
      </span>
      <span className="font-abz italic text-xl">{text}</span>
    </h1>
  );
}