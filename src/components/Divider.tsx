export default function Divider() {
  return (
    <div className="relative py-2 bg-black">
      <div className="max-w-4xl mx-auto px-6 flex items-center gap-4">
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E63946]/20 to-transparent" />
      </div>
    </div>
  );
}
