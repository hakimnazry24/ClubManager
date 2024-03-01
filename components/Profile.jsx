import { FaSmile } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-3xl text-indigo-600">
        <FaSmile></FaSmile>
      </div>
      <p className="font-semibold text-indigo-600 text-sm">Username</p>
    </div>
  );
}
