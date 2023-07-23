import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-7 lg:text-3xl text-[20px] text-white font-bold py-1 mb-2">
        <Link className="hover:scale-105 transition-all duration-200 hover:text-orange-500" to="/">All</Link>
        <Link className="hover:scale-105 transition-all duration-200 hover:text-orange-500" to="/?todos=active">Active</Link>
        <Link className="hover:scale-105 transition-all duration-200 hover:text-orange-500" to="/?todos=completed">Completed</Link>
    </nav>
  )
}

export default Navbar;