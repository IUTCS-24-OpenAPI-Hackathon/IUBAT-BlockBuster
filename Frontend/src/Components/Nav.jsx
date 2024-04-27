import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/UserContext";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header className="bg-black  top-0 right-0 left-0">
      <nav className="px-5 py-5 max-w-7xl mx-auto flex justify-between">
        <a href="/" className="text-lg font-bold text-white">
          Location<span className="text-orange-400">Bluster</span>
        </a>

        {/* menu icons */}

        <div className="  ">
          <button className="text-white btn-warning    cursor-pointer ">
            {user?.email ? (
              <button onClick={handleSignOut} className="btn btn-sm">
                Log out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm">Log In</button>
              </Link>
            )}
          </button>
        </div>
      </nav>
      {/* menu items only for mobile */}
      <div className=" ">
        <ul className={`md:hidden gap-12 text-lg space-y-4 block px-7 `}></ul>
      </div>
    </header>
  );
};

export default Nav;
