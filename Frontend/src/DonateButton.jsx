import { FaRibbon } from "react-icons/fa";
import { useDonate } from "./DonateContext"; // ⬅️ import the context hook

export default function DonateButton() {
  const { setIsDonateOpen } = useDonate(); // ⬅️ access global state setter

  return (
    <div className="hover:cursor-pointer">
      <button
        onClick={() => setIsDonateOpen(true)} // ⬅️ open global overlay
        className="flex items-center space-x-2 bg-[#D2635D] text-white px-4 py-2 rounded-[10px] text-sm font-bold hover:cursor-pointer"
      >
        <FaRibbon className="w-4 h-4" />
        <span>Donate</span>
      </button>
    </div>
  );
}
