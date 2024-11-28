import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-slate-200  flex justify-around p-3 shadow-md items-center">
      <Link to="/">
        <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap ">
          <span className="text-slate-500 ">RAK</span>
          <span className="text-slate-700 ">ESTATE</span>
        </h1>
      </Link>
      <form className="bg-slate-100 p-3 rounded-lg items-center flex ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus-within:outline-none"
        />
        <FaSearch className="text-slate-600 hover:cursor-pointer" />
      </form>
      <ul className=" flex gap-4 items-center font-bold text-slate-700">
        <Link to="/"><li className="hover:underline hidden sm:inline">Home</li></Link>
        <Link to="/about"><li className="hover:underline hidden sm:inline">About</li></Link>
        <Link to="/sign-in"><li className="hover:underline hidden sm:inline">SignIn</li></Link>
        
        
        
      </ul>
    </header>
  );
}
