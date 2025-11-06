// ColorLegend: small utility to render labeled colored badges (used for step coloring)
const ColorLegend = ({ items = [] }) => {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-2">Legend</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <div key={it.label} className="inline-flex items-center gap-2 px-2 py-1 bg-white rounded-md border">
            <span className="w-3 h-3 rounded-full" style={{ background: it.color }} aria-hidden />
            <span className="text-sm text-gray-700">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorLegend;
