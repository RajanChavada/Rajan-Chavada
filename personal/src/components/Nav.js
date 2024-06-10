import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import {
  Disclosure,
  Menu,
  Transition,
  DisclosureButton,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Resume from "./images/resume.pdf"

const navigation = [
  { name: 'About Me', to: 'aboutSection' },
  { name: 'Projects', to: 'projectsSection' },
  { name: 'Work Experience', to: 'workSection' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="shadow-2xl bg-slate-600 fixed top-5 left-0 right-0 z-10 w-full max-w-7xl mx-auto" style={{ borderRadius: 20, opacity: 0.9, backgroundColor: '#112d32' }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <FontAwesomeIcon icon={faUserTie} size="2x" style={{ color: '#88bdbc', margin: 10 }} />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/rajan-chavada/"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            LinkedIn
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            arget="_blank"
                            href="https://github.com/RajanChavada"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            GitHub
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            target="_blank"
                            href={Resume}
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Professional Resume
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
