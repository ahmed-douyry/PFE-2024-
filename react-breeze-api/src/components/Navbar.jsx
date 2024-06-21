import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useAuthcontext from '../context/Authcontext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthcontext();

  function currYear() {
    var year = new Date().getFullYear();
    return year;
  }

  return (
    <div className="bg-white w-full" style={{ zIndex: 44, position: 'sticky', top: 0 }}>
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        ISTA BOUZNIKA &copy; {currYear()}
      </p>
      <header className="relative bg-white container mx-auto px-12">
        <nav aria-label="Top" className="max-w-7xl sm:px-6 lg:px-8 mt-7 text-white bg-indigo-600 rounded-lg">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <h3 style={{ color: 'indigo' }} className="h-8 w-auto">
                    𝓞𝓕𝓟𝓟𝓣
                  </h3>
                </Link>
              </div>
              
              <div className="ml-auto flex items-center">
                {user && user.role === 'admin' && (
                  <div className="hidden lg:flex lg:space-x-6">
                    <Link to="/addannonce" className="text-white hover:text-gray-300 font-medium">
                      Add Announcement
                    </Link>
                    <Link to="/addcard" className="text-white hover:text-gray-300 font-medium">
                      Add Card
                    </Link>
                    <Link to="/addgroup" className="text-white hover:text-gray-300 font-medium">
                      Add Group
                    </Link>
                    <button onClick={logout} className="text-white hover:text-gray-300 font-medium ml-4">
                      Logout
                    </button>
                  </div>
                )}
                {user && user.role !== 'admin' && (
  <div className="flex justify-between items-center w-full">
    <div className="hidden lg:flex justify-start lg:space-x-8 lg:ml-8">
      <Link to="/emploi" className="text-sm font-medium text-white hover:text-gray-300">
        Emploi du temps
      </Link>
      <Link to="#" className="text-sm font-medium text-white hover:text-gray-300">
        Formations
      </Link>
      <Link to="/espace-etudiant" className="text-sm font-medium text-white hover:text-gray-300">
        Espace Étudiant
      </Link>
      <Link to="/departement" className="text-sm font-medium text-white hover:text-gray-300">
        Département
      </Link>
    </div>
    <div className="hidden lg:flex lg:space-x-6">
      <button onClick={logout} className="text-white hover:text-gray-300 font-medium ml-4">
        Logout
      </button>
    </div>
  </div>
)}
                {!user && (
                  <div className="hidden lg:flex lg:space-x-6">
                    <Link to="/login" className="text-white hover:text-gray-300 font-medium">
                      Sign in
                    </Link>
                    <Link to="/signup" className="text-white hover:text-gray-300 font-medium">
                      Create account
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <Transition show={open} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl rounded-lg">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="space-y-6 px-4 py-6">
                    <Link to="/emploi" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                      Emploi du temps
                    </Link>
                    <Link to="#" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                      Formations
                    </Link>
                    <Link to="/espace-etudiant" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                      Espace Étudiant
                    </Link>
                    <Link to="/departement" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                      Département
                    </Link>
                    {user && user.role === 'admin' && (
                      <>
                        <Link to="/addannonce" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Add Announcement
                        </Link>
                        <Link to="/addcard" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Add Card
                        </Link>
                        <Link to="/addgroup" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Add Group
                        </Link>
                        <button onClick={logout} className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Logout
                        </button>
                      </>
                    )}
                    {user && user.role !== 'admin' && (
                      <>
                        <button onClick={logout} className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Logout
                        </button>
                      </>
                    )}
                    {!user && (
                      <>
                      <div className="hidden lg:flex justify-start lg:space-x-8 lg:ml-8">
      <Link to="/emploi" className="text-sm font-medium text-white hover:text-gray-300">
        Emploi du temps
      </Link>
      <Link to="#" className="text-sm font-medium text-white hover:text-gray-300">
        Formations
      </Link>
      <Link to="/espace-etudiant" className="text-sm font-medium text-white hover:text-gray-300">
        Espace Étudiant
      </Link>
      <Link to="/departement" className="text-sm font-medium text-white hover:text-gray-300">
        Département
      </Link>
    </div>
                        <Link to="/login" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Sign in
                        </Link>
                        <Link to="/signup" className="block text-base font-medium text-gray-900 hover:text-gray-700">
                          Create account
                        </Link>

                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </header>
    </div>
  );
}
