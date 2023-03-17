import { Link } from "react-router-dom"

export default function Nav(){


    return (
    <nav className="" >
    <ul className="text-1xl flex justify-center">
      <li className="mx-2 "> <Link to="/"> Home</Link></li>
      <li className="mx-2"> <Link to="/collectionpage">Collection Page   </Link></li>
    </ul>
  </nav>
    )
};