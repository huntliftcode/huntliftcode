import NavbarItem from "./NavbarItem"
import { useLocation } from 'react-router-dom';
import headshot from '/personal/headshot_avatar.png'
import githubLogo from '/companies/github-mark-white.svg'

export default function Navbar({}) { 

  const isCurrent = (href: string) => {
    let location = useLocation();
    // const pathname = window.location.pathname
    console.log(location)
    return href === location.pathname; 
  }

  const navigation = [
    { name: 'Home', href: '/', key: 'home'},
    { name: 'Work History', href: '/work-experience', key: 'work-experience'},
    { name: 'Technical Skills ', href: '/technical-skills', key: 'tech-skills'},
    { name: 'Education', href: '/education', key: 'education'},
    { name: 'Outside of Work', href: '/hobbies', key: 'hobbies'},
  ]
  
  return (
      <>
        <div className="px-2 sm:px-2 lg:px-2 bg-gray-800" >
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                src={headshot}
                className="rounded-full border border-gray-700 shadow-sm w-full h-auto max-h-12"
                >
                </img>
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
            <img
                src={githubLogo}
                className="w-8 float-right flex hover:cursor-pointer"
                onClick={() => window.open("https://github.com/huntliftcode/huntliftcode", "_blank")}              
                >
              </img>
          </div>
        </div>
      </>
    )
}