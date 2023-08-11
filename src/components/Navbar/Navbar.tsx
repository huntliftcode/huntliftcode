import NavbarItem from "./NavbarItem"
import { useLocation } from 'react-router-dom';

export default function Navbar({}) { 

  const isCurrent = (href: string) => {
    let location = useLocation();
    return href === location.pathname; 
  }

  const navigation = [
    { name: 'Home', href: '/', key: 'home'},
    { name: 'Work History', href: '/work-experience', key: 'work-experience'},
    { name: 'Eduction', href: '/education', key: 'education'},
    { name: 'Outside of Work', href: '/hobbies', key: 'hobbies'},
  ]
  
  return (
      <>
        <div className="px-2 sm:px-2 lg:px-2 bg-gray-800" >
          <div className="relative flex h-16 items-center justify-between">
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
                  { navigation.map((item) => (
                      <NavbarItem name={item.name} href={item.href} key={item.key} current={isCurrent(item.href)} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}