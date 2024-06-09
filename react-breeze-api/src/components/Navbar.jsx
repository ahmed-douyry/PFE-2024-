import React, { Fragment, useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverGroup, PopoverPanel, PopoverButton, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import useAuthcontext from '../context/Authcontext';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Espace Étudiants',
      featured: [
        {
          name: 'Club Parascolaire',
          href: '#',
          imageSrc: 'https://mir-s3-cdn-cf.behance.net/projects/404/545b4261074903.Y3JvcCwxODkwLDE0NzgsNDkxLDM0Ng.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://mir-s3-cdn-cf.behance.net/projects/404/21cdcb150706351.Y3JvcCwxODgxLDE0NzIsMjA5LDA.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'accessories',
          name: 'FPA',
          items: [
            { name: 'Note FPA', href: '#' },
            { name: "Fiche d'appréciation", href: '#' },
            { name: 'Contrat de stage', href: '#' },
            { name: 'Assurance', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Club Parascolaire ',
          items: [
            { name: 'Club Culturel', href: '#' },
            { name: 'Club Sportif', href: '#' },
            { name: 'Club Innovation', href: '#' },
            { name: 'Club Social', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Départements',
      featured: [
        {
          name: 'Digitalisation',
          href: '#',
          imageSrc: 'https://www.sdtconsulting.ma/static/uploads/2022/07/le-developpement-du-digital-au-Maroc-a-horizon-2025.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: "L'Esprit-guide",
          href: '#',
          imageSrc: 'https://osbt.ma/storage/2023/07/DSC00847-scaled.jpg',
          imageAlt: 'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Filiéres',
          items: [
            { name: 'Développement Digital (TS)', href: '#' },
            { name: 'Infrastructure Digitale (TS)', href: '#' },
            { name: 'Gestion des entreprises (TS)', href: '#' },
            { name: 'Assistante Administrative (T)', href: '#' },
            { name: 'Bac professionnel (T)', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Emploi du temps', href: '#' },
    { name: 'Formations', href: '#' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthcontext();

  function currYear() {
    var year = new Date().getFullYear();
    return year;
  }

  return (
    <div className="bg-white " style={{ zIndex: 44, position: 'sticky' }}>
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          ISTA BOUZNIKA &copy; {currYear()}
        </p>
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <h3
                    style={{ color: 'indigo' }}
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  >
                    𝓞𝓕𝓟𝓟𝓣
                  </h3>
                </a>
              </div>

              {/* Flyout menus */}
              

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-start lg:space-x-6">
                  {user && user.role === 'admin' ? (
                    <>
                      <Link to="/addannonce" className="text-gray-700 hover:text-gray-900 font-medium mr-6">
                        Add Announcement
                      </Link>
                      <button onClick={logout} className="text-gray-700 hover:text-gray-900 font-medium">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                    <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch z-40">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              {category.name}
                            </PopoverButton>
                          </div>

                          <Transition
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500" style={{ zIndex: 50 }}>
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                          </div>
                                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                          </a>
                                          <p aria-hidden="true" className="mt-1">
                                            Click now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                          </p>
                                          <ul role="list" aria-labelledby={`${section.name}-heading`} className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="hover:text-gray-800">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a key={page.name} href={page.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
                      {user ? (
                        <button onClick={logout} className="-m-2 block p-2 font-medium text-gray-900">
                          Logout
                        </button>
                      ) : (
                        <>
                          <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">
                            Sign in
                          </Link>
                          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                          <Link to="/signup" className="-m-2 block p-2 font-medium text-gray-900">
                            Create account
                          </Link>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}