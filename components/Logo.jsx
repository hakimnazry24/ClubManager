import { FaCloud } from "react-icons/fa"

export default function Logo() {
  return (
    <a href="/">
        <div className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
            <FaCloud></FaCloud>
            <p>ClubManager</p>
        </div>
    </a>
  )
}
