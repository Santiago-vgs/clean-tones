export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[3px] w-10 bg-gold" />
        <p className="text-gold text-xs font-bold tracking-[0.25em] uppercase">{eyebrow}</p>
      </div>
      <h1 className="font-display text-5xl md:text-6xl font-black text-brand-50 uppercase leading-none">
        {title}
      </h1>
      {children && <div className="mt-4 text-brand-400 text-sm">{children}</div>}
    </div>
  );
}
