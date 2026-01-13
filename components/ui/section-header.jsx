export default function SectionHeader({ children }) {
  return (
    <div className="w-full border-neutral-500 mb-3 flex">
    <h2 className="text-2xl font-bold text-neutral-100 mb-2 tracking-tighter ">
        {children}
    </h2>
    </div>
  );
}

