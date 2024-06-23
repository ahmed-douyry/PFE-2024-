import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useAuthcontext from '../context/Authcontext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const { user, logout } = useAuthcontext();

  function currYear() {
    var year = new Date().getFullYear();
    return year;
  }

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!document.querySelector(':hover').closest('.submenu')) {
        setActiveMenu(null);
      }
    }, 200); // Duration reduced to 200 ms
  };

  return (
    <div className="bg-white w-full" style={{ zIndex: 44, position: 'sticky', top: 0 }}>
      <p className="flex h-10 items-center justify-center bg-indigo-400 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        ISTA BOUZNIKA &copy; {currYear()}
      </p>
      <header className="relative bg-white container mx-auto px-12">
        <nav aria-label="Top" className="max-w-7xl sm:px-6 lg:px-8 mt-7 text-white bg-indigo-400 rounded-lg">
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
                <div className="hidden lg:flex lg:space-x-6">
                  <div 
                    className="relative group" 
                    onMouseEnter={() => handleMouseEnter('technicienSpecialise')} 
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="text-white hover:text-gray-300 p-4 font-medium">Cours</button>
                    {activeMenu === 'technicienSpecialise' && (
                      <div 
                        className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg submenu" 
                        onMouseEnter={() => handleMouseEnter('technicienSpecialise')}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-1">
                          <div className="relative group">
                            <button className="block px-4 py-2 text-sm text-gray-700">Technicien Spécialisé</button>
                            <div 
                              className="absolute left-full top-0 mt-2 w-56 bg-white rounded-md shadow-lg submenu"
                              onMouseEnter={() => handleMouseEnter('technicienSpecialise')}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div className="py-1">
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700">Gestion des entreprise</Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700">Infrastructure Digitale</Link>
                                <Link to="#" className="block px-4 py-2 text-sm text-gray-700">Développement Digital</Link>

                              </div>
                            </div>
                          </div>
                          <div 
                            className="relative group" 
                            onMouseEnter={() => handleMouseEnter('niveauTechnicien')} 
                            onMouseLeave={handleMouseLeave}
                          >
                            <button className="block px-4 py-2 text-sm text-gray-700">Niveau Technicien</button>
                            {activeMenu === 'niveauTechnicien' && (
                              <div 
                                className="absolute left-full top-0 mt-2 w-56 bg-white rounded-md shadow-lg submenu"
                                onMouseEnter={() => handleMouseEnter('niveauTechnicien')}
                                onMouseLeave={handleMouseLeave}
                              >
                                <div className="py-1">
                                  <Link to="#" className="block px-4 py-2 text-sm text-gray-700">Assistant Administratif</Link>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {user && user.role === 'admin' && (
                  <div className="hidden lg:flex lg:space-x-6">
                    <Link to="/addannonce" className="text-white hover:text-gray-300 font-medium">
                      Ajouter un annonce
                    </Link>
                    <Link to="/addcard" className="text-white hover:text-gray-300 font-medium">
                      Add Card
                    </Link>
                    <Link to="/addgroup" className="text-white hover:text-gray-300 font-medium">
                      Ajouter un groupe
                    </Link>
                    <Link to="/addpv" className="text-white hover:text-gray-300 font-medium">
                      Ajouter un pv du note
                    </Link>
                    <button onClick={logout} className="text-white hover:text-gray-300 font-medium ml-4">
                      déconnecter 
                    </button>
                  </div>
                )}
                {user && user.role !== 'admin' && (
                  <div className="flex justify-between items-center w-full">
                    <div className="hidden lg:flex justify-start lg:space-x-8 lg:ml-8">
                      <Link to="/emploi" className="text-sm font-medium text-white hover:text-gray-300">
                        Emploi du temps
                      </Link>
                      <Link to="/formation" className="text-sm font-medium text-white hover:text-gray-300">
                        Formations
                      </Link>
                      <Link to="/pvliste" className="text-sm font-medium text-white hover:text-gray-300">
                        Espace Étudiant
                      </Link>
                      <Link to="/departement" className="text-sm font-medium text-white hover:text-gray-300">
                        Département
                      </Link>
                    </div>
                    <div className="hidden lg:flex lg:space-x-6">
                      <button onClick={logout} className="text-white hover:text-gray-300 font-medium ml-4">
                        déconnecter 
                      </button>
                    </div>
                  </div>
                )}
                {!user && (
                  <div className="hidden lg:flex lg:space-x-6">
                    <Link to="/emploi" className="text-sm font-medium text-white hover:text-gray-300">
                      Emploi du temps
                    </Link>
                    <Link to="/formation" className="text-sm font-medium text-white hover:text-gray-300">
                      Formations
                    </Link>
                    <Link to="/espace-etudiant" className="text-sm font-medium text-white hover:text-gray-300">
                      Espace Étudiant
                    </Link>
                    <Link to="/departement" className="text-sm font-medium text-white hover:text-gray-300">
                      Département
                    </Link>
                    <Link to="/login" className="text-white hover:text-gray-300 font-medium">
                      Se connecter
                    </Link>
                    <Link to="/signup" className="text-white hover:text-gray-300 font-medium">
                      Créer un compte
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <Transition
          show={open}
          as={Fragment}
        >
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
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="space-y-6 py-6 px-4">
                    <Link to="/emploi" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                      Emploi du temps
                    </Link>
                    <Link to="/formation" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                      Formations
                    </Link>
                    <Link to="/espace-etudiant" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                      Espace Étudiant
                    </Link>
                    <Link to="/departement" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                      Département
                    </Link>
                    {!user && (
                      <Fragment>
                        <Link to="/login" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Se connecter
                        </Link>
                        <Link to="/signup" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Créer un compte
                        </Link>
                      </Fragment>
                    )}
                    {user && user.role === 'admin' && (
                      <Fragment>
                        <Link to="/addannonce" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Ajouter un annonce
                        </Link>
                        <Link to="/addcard" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Add Card
                        </Link>
                        <Link to="/addgroup" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Ajouter un groupe
                        </Link>
                        <Link to="/addpv" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Ajouter un pv du note
                        </Link>
                        <button onClick={logout} className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          déconnecter 
                        </button>
                      </Fragment>
                    )}
                    {user && user.role !== 'admin' && (
                      <Fragment>
                        <Link to="/emploi" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Emploi du temps
                        </Link>
                        <Link to="/formation" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Formations
                        </Link>
                        <Link to="/pvliste" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Espace Étudiant
                        </Link>
                        <Link to="/departement" className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          Département
                        </Link>
                        <button onClick={logout} className="text-base font-medium text-gray-900 hover:text-gray-700 block">
                          déconnecter 
                        </button>
                      </Fragment>
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
