export function GoldRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-8 bg-[#e4c590]" />
      <span className="size-1.5 rotate-45 bg-[#e4c590]" />
      <span className="h-px w-8 bg-[#e4c590]" />
    </div>
  );
}
