import { Fragment, useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
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
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition show={open}>
        <Dialog className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <TabGroup className="mt-2">
                  <div className="border-b border-gray-200">
                    <TabList className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                  <TabPanels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
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
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul role="list" aria-labelledby={`${category.id}-${section.id}-heading-mobile`} className="mt-6 flex flex-col space-y-6">
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </TabGroup>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {user ? (
                    <div className="flow-root">
                      <button onClick={logout} className="-m-2 block p-2 font-medium text-gray-900">
                        Logout
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="flow-root">
                        <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">
                          Sign in
                        </Link>
                      </div>
                      <div className="flow-root">
                        <Link to="/signup" className="-m-2 block p-2 font-medium text-gray-900">
                          Create account
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

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
                  <h3 style={{ color: 'indigo' }} className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    𝓞𝓕𝓟𝓟𝓣
                  </h3>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
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
                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
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

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
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
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}