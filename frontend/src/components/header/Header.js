/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/images/default.png";
import logo from "../../assets/images/logo.svg";
import { useAuthContext } from "../../context/AuthContext";
import auth from "../../request/auth";
import {
    ADMIN,
    HOME,
    HOME_LABEL,
    LOGIN,
    LOGIN_LABEL,
    PROFILE,
    SIGNUP,
    SIGNUP_LABEL,
    USER,
} from "../../routes/routes";
const navigation = [
    { name: HOME_LABEL, to: HOME, current: true },
    { name: LOGIN_LABEL, to: LOGIN, current: false },
    { name: SIGNUP_LABEL, to: SIGNUP, current: false },
];

const authNavigation = [
    { name: HOME_LABEL, to: HOME, current: true },
    { name: "Admin", to: ADMIN, current: false },
    { name: "Dashboard", to: USER, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    let { pathname } = useLocation();
    const { state, dispatch } = useAuthContext();
    const navigate = useNavigate();

    return (
        <Disclosure as="nav" className="bg-white  border-b-gray-200 shadow-sm">
            {({ open }) => (
                <>
                    <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6 text-red-50"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6 text-primary"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link
                                        to={HOME}
                                        className="font-extrabold text-3xl text-primary hover:cursor-pointer flex items-center"
                                    >
                                        <img
                                            className="w-12"
                                            src={logo}
                                            alt="Exam_Portal"
                                        />
                                        <p className="hidden sm:block ml-2">
                                            Portal
                                        </p>
                                    </Link>
                                </div>
                                <div className="hidden sm:flex items-center  sm:ml-6">
                                    <div className="flex space-x-4">
                                        {state.user
                                            ? authNavigation.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.to}
                                                      className={classNames(
                                                          item.to === pathname
                                                              ? "bg-primary text-white"
                                                              : "text-primary hover:text-white hover:bg-primary",
                                                          "px-3 py-2 rounded-md text-sm font-medium "
                                                      )}
                                                      aria-current={
                                                          item.current
                                                              ? "page"
                                                              : undefined
                                                      }
                                                      style={{
                                                          display:
                                                              item.name ===
                                                                  "Admin" &&
                                                              state?.user
                                                                  ?.authorities[0]
                                                                  ?.authority !==
                                                                  "ADMIN"
                                                                  ? "none"
                                                                  : " ",
                                                      }}
                                                  >
                                                      {item.name}
                                                  </Link>
                                              ))
                                            : navigation.map((item) => (
                                                  <Link
                                                      key={item.name}
                                                      to={item.to}
                                                      className={classNames(
                                                          item.to === pathname
                                                              ? "bg-primary text-white"
                                                              : "text-primary hover:text-white hover:bg-primary",
                                                          "px-3 py-2 rounded-md text-sm font-medium "
                                                      )}
                                                      aria-current={
                                                          item.current
                                                              ? "page"
                                                              : undefined
                                                      }
                                                  >
                                                      {item.name}
                                                  </Link>
                                              ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {state?.user && (
                                    <div className=" hidden sm:block text-base text-primary font-bold ml-3 ">
                                        {state?.user?.username}
                                    </div>
                                )}
                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    {state?.user && (
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={defaultAvatar}
                                                    alt="userProfile"
                                                />
                                            </Menu.Button>
                                        </div>
                                    )}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        /* @TODO ==> Change this link  Fri Jul 01  */
                                                        to={PROFILE}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Your Profile
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to={"/user"}
                                                        /* @TODO ==> Change this link  Fri Jul 01  */
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        Dashboard
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            {state?.user?.authorities[0]
                                                ?.authority === "ADMIN" && (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to={ADMIN}
                                                            /* @TODO ==> Change this link  Fri Jul 01  */
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Admin
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            )}
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        role="button"
                                                        onClick={() =>
                                                            auth.logut(
                                                                dispatch,
                                                                navigate
                                                            )
                                                        }
                                                        /* @TODO ==> Change this link  Fri Jul 01  */
                                                        className={classNames(
                                                            "block px-4 py-2 text-sm bg-red-400 text-white rounded-md font-bold cursor-pointer hover:bg-red-500  hover:text-white "
                                                        )}
                                                    >
                                                        Sign out
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as={Link}
                                        to={item.to}
                                        className={classNames(
                                            item.to === pathname
                                                ? "bg-primary text-white"
                                                : "text-gray-800 hover:bg-blue-400 hover:text-white",
                                            "block px-3 py-2 rounded-md text-base font-medium"
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}
