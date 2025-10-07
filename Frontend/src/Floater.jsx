import SouledStoreLogo from "./assets/SouledStoreLogo.png"

export default function Floater() {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div
          className="w-[230px] h-[114px] border-4 rounded-[30px] flex items-center justify-between px-3 py-2 shadow-md bg-white"
          style={{ borderColor: "#E31C79" }}
        >
          {/* Logo placeholder with pink circle */}
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-xs text-gray-500 border-3 border-[#FFA3B5]">
              <img
              src={SouledStoreLogo}
              />
            </div>
  
          {/* Text and button */}
          <div className="flex flex-col justify-between h-full ml-2 py-1">
            <div>
              <p className="text-[13px] font-semibold font-visby leading-tight">
                Fight Breast<br></br> Cancer With ACF
              </p>
              <p className="text-[10px] font-visby">
                Limited edition merch
              </p>
            </div>

            <a href="https://www.thesouledstore.com/artists/asian-cancer-relief">
            <button
              className="mt-1 py-1 text-[12.5px] font-semibold rounded-[30px] bg-[#FFA3B5] text-white w-[85px] cursor-pointer"
            >
              SHOP HERE
            </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  