import { ReactNode } from "react";

export default function Container({
  children,
  className
}: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={`${className} max-w-5xl p-16 w-full lg:p-2`}>
      {children}
    </div>
  );
}