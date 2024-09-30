import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/Authprovider";
import { BiLogOut } from "react-icons/bi";

const Nav = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const user = useAuth();
  const { authInfo, handleLogOut } = user;

  return (
    <nav className="shadow-md flex items-center justify-between px-16 py-1">
      <Link to={"/"}>
        <h1 className="text-2xl">𝓒𝓵𝓲𝓮𝓷𝓽 𝓥𝓲𝓼𝓲𝓽</h1>
      </Link>
      <div>
        <img
          src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
          width={60}
          className="rounded-full relative cursor-pointer"
          onClick={() => setShowDropDown(!showDropDown)}
        />
        {showDropDown && (
          <div className="absolute bg-gray-300 w-96  py-2 mt-2 rounded-md z-50 right-36">
            <div className="flex items-center justify-between px-7">
              <div>
                <p className="font-semibold">{authInfo.user.username}</p>
                <p className="font-semibold">{authInfo.user.email}</p>
              </div>
              <img
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                width={60}
                className="rounded-full relative cursor-pointer"
              />
            </div>
            <button
              onClick={handleLogOut}
              className="mt-2 font-semibold ml-7 flex items-center gap-3"
            >
              <BiLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
