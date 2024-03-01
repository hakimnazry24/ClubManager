import { FaGlobeAfrica } from "react-icons/fa";

export default function SideBarButton({ text, link }) {
    return (
        <a href={ link }>
            <div className="p-3 text-md font-semibold text-gray-500/80 flex items-center gap-2 hover:text-white hover:bg-indigo-600 rounded-xl">
                <div>
                    <FaGlobeAfrica></FaGlobeAfrica>
                </div>
                <p className="text-nowrap">{ text }</p>
            </div>
        </a>
    )
}