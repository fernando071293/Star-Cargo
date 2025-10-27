import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react';
import LanguageSwitchLink from './LanguageSwitchLink'

export default function DropdownLanguage({
  transparent,
  currentLanguage,
  languageList,
  changeLaguage
}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <>
      <Menu as="div" className="relative hidden md:block text-left">
          <Menu.Button className="inline-flex w-full justify-center items-center py-2 text-h6 text-base-400 focus:outline-none">
            <span className='mr-2'>
              <h6 className={transparent ? 'text-white':''}>{currentLanguage.sortName}</h6>
            </span>
            <span className={classNames(transparent ? 'rounded-full border-2 border-white': '','flex mr-2')}>
              <Image width={16} height={16} alt="Star Cargo" src={currentLanguage.flag} />
            </span>
            <span className="flex mr-2">
              {transparent ? 
              <Image width={12} height={12} alt="Star Cargo"  src='/images/chevron-down-white.svg' />:
              <Image width={12} height={12} alt="Star Cargo"  src='/images/chevron-down-dark.svg' />}
              
            </span>
          </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {languageList.map((language, z) => (
                <Menu.Item key={z}>
                {({ active }) => (
                  <LanguageSwitchLink className="mr-2 min-w-[80px]" currentLanguage={currentLanguage} changeLaguage={changeLaguage} locale={language} key={z} />
                )}
              </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ul className='w-full block md:hidden'>
        {languageList.map((language, k) => (
            <li key={k}>
              <LanguageSwitchLink className="mr-2 min-w-[80px]" currentLanguage={currentLanguage} changeLaguage={changeLaguage} locale={language} key={k} />
            </li>
              ))
        }
      </ul>
    </>
  )
}
