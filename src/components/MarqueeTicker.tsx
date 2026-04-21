const items = [
  'Project Planning', '★', 'General Contracting', '★',
  'Interior Design', '★', 'Exterior Design', '★',
  'Space Planning', '★', 'Project Management', '★',
  'Project Planning', '★', 'General Contracting', '★',
  'Interior Design', '★', 'Exterior Design', '★',
  'Space Planning', '★', 'Project Management', '★',
];

export default function MarqueeTicker() {
  return (
    <div className="bg-[#ff6b35] py-3 overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <div className="marquee-track flex gap-10 pr-10">
          {items.map((item, i) => (
            <span
              key={i}
              className={`font-barlow font-bold text-sm tracking-widest uppercase ${
                item === '★' ? 'text-white/40 text-xs' : 'text-white'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
