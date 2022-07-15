import { Circle } from "better-react-spinkit";
import Logo from "../images/kings-net-logo.png";
import { useStateContext } from "../contexts/ContextProvider";

const Loader = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="bg-light-gray flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4 w-16 h-16 md:w-40 md:h-40 ">
        <img src={Logo} alt="kings-network-logo" />
      </div>
      <div>
        <Circle size={40} color={currentColor} />
      </div>
    </div>
  );
};

export default Loader;
