import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { Tooltip } from "@material-ui/core";

import { useStateContext } from "../contexts/ContextProvider";
import { themeColors } from "../data/data";

const ThemeSettings = () => {
  const { setThemeSettings, currentColor, setColor, currentMode, setMode } =
    useStateContext();
  return (
    <div className="fixed bg-half-transparent w-screen right-0 top-0 nav-item">
      <div className="float-right h-screen dark:text-gray-200 bgr-white dark:bg-[#484b52] w-[300px] md:w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="text-xl font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="text-lg font-semibold">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </label>
          </div>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="text-lg font-semibold">Theme Colors</p>
          <div className="flex gap-3 flex-wrap">
            {themeColors.map((item, index) => (
              <Tooltip key={index} title={item.name} arrow>
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    className="h-10 rounded-full cursor-pointer w-10"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
