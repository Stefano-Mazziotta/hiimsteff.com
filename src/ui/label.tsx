import { label } from "@/typess/label";

export function Label({ label }: { label: label }) {
  const { name } = label;
  return (
    <p
      className="
        border 
      border-sky-100 
      bg-sky-50 px-2 py-0.5 
      dark:border-sky-500/15 
      dark:bg-sky-500/10 
      dark:text-sky-300
      "
    >
      {name}
    </p>
  );
}
