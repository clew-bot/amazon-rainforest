import down from "../../assets/lottie/down.json";



import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
    height: number
}

const GoDown = ({ height }:Props) => {
  return (
    <div
    className="down opacity-0"
    onClick={() => window.scrollTo(0, height)}
    >
    <Player
    loop={true}
    autoplay
    className="cursor-pointer bg-red-500"
    style={{ width: 175, height: 175 }}
    src={down}
    />
    </div>
  )
}

export default GoDown