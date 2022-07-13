import { useEffect } from "react";

import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Tooltip } from "@material-ui/core";
import { MdOutlineMessage } from "react-icons/md";

import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    setScreenSize,
    searchBox,
    setSearchBox,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const badge =
    "bg-red-500 text-sm flex items-center justify-center w-5 h-5 rounded-full text-white absolute";

  return (
    <div className="flex justify-between w-full pt-3 md:pt-2 pb-4 px-4 h-24">
      <div className="flex items-center mr-2">
        <div className="pr-8">
          <Tooltip title="Menu" arrow>
            <button type="button" onClick={() => setActiveMenu(!activeMenu)}>
              <AiOutlineMenu className="text-xl" />
            </button>
          </Tooltip>
        </div>
        <div>
          <span className="text-lg md:text-2xl font-semibold">
            Welcome, Joshua 🎉
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Tooltip title="Find Churches" arrow>
          <div
            onClick={() => setSearchBox(!searchBox)}
            className="bg-white p-3 cursor-pointer hover:drop-shadow-lg rounded-full"
          >
            <span>
              <AiOutlineSearch className="text-[#009063] text-lg" />
            </span>
          </div>
        </Tooltip>
        <div>
          <Tooltip title="Notifications" arrow>
            <button className="relative">
              <span
                className={`md:left-3 left-2 md:bottom-3 bottom-2 ${badge}`}
              >
                2
              </span>
              <span>
                <AiOutlineBell className="md:text-2xl text-xl" />
              </span>
            </button>
          </Tooltip>
        </div>
        <div>
          <Tooltip title="Messages" arrow>
            <button className="relative">
              <span
                className={`md:left-3 left-2 md:bottom-3 bottom-2 ${badge}`}
              >
                4
              </span>
              <span>
                <MdOutlineMessage className="md:text-2xl text-xl" />
              </span>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
