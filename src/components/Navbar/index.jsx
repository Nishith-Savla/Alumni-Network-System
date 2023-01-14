import { Text, Img } from "components";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row md:flex-wrap sm:flex-wrap md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
      <div className="bg-blue_300 flex flex-col items-center md:p-[13px] sm:p-[15px] p-[20px] w-[24%] ">
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_settings.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="settings"
          />
          <Text
            className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] text-white_A700"
            variant="body13"
          >
            Feed
          </Text>
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_arrowdown_24X24.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="arrowdown One"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
            variant="body13"
          >
            Dashboard
          </Text>
        </NavLink>
        <NavLink
          to="/directory"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_user.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="user"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
            variant="body13"
          >
            Alumni Directory
          </Text>
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_trash.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="trash"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
            variant="body13"
          >
            Photo Gallery
          </Text>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_menu.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="menu"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
            variant="body13"
          >
            Events
          </Text>
        </NavLink>
        <NavLink
          to="/scholarships"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_menu.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="menu One"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
            variant="body13"
          >
            Scholarships
          </Text>
        </NavLink>
        <NavLink
          to="/donate"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_user.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="user Two"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
            variant="body13"
          >
            Donations
          </Text>
        </NavLink>
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            (isActive ? "bg-indigo_A200 " : "") +
            "flex flex-row items-start md:flex-wrap sm:flex-wrap sm:mx-[0] rounded-radius7 my-[4px] sm:px-[0] sm:w-[100%] p-[10px] w-[100%]"
          }
        >
          <Img
            src="images/img_libuilding.svg"
            className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="libuilding"
          />
          <Text
            className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
            variant="body13"
          >
            Jobs
          </Text>
        </NavLink>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
