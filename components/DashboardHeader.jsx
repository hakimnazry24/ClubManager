import Logo from "./Logo"
import Profile from "./Profile"

export default function DashboardHeader({ title }) {
  return (
    <div className="p-5 px-20 flex justify-between items-center">
        <h1 className="text-3xl text-indigo-600 font-bold">{ title }</h1>
        <Profile></Profile>
    </div>
  )
}
