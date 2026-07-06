import { PlusIcon } from "./Icons";

type LogoProps = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "dark" ? "text-navy" : "text-white";
  const subColor = variant === "dark" ? "text-gray-500" : "text-gray-400";

  return (
    <div className="flex flex-col leading-none">
      <div className={`flex items-center font-black italic text-xl tracking-tight ${textColor}`}>
        Headlight<span className="text-blue">MD</span>
        <span className="ml-1 -mt-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue text-white not-italic">
          <PlusIcon className="w-2.5 h-2.5" />
        </span>
      </div>
      <span className={`text-[10px] font-bold tracking-[0.15em] ${subColor}`}>YOUR HEADLIGHT DOCTOR</span>
    </div>
  );
}
