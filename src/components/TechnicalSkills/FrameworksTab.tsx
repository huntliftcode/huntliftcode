import node from '/frameworks/node.svg'
import react from '/frameworks/react-logo.svg'
import ror from '/frameworks/Ruby-on-Rails-logo.svg'
import vue from '/frameworks/vue-js.svg'

import { Tooltip } from 'flowbite-react';

export default function FrameworksTab() {
  const renderLogo = (logo: string, tooltip: string, classNames?: string) => {
    return (
      <Tooltip content={tooltip}>
        <img src={logo} className={`w-48 h-auto hover:cursor-help ${classNames}`}></img>
      </Tooltip>
    )
  }
  return (
    <>
        <div className='grid grid-cols-2 gap-4 justify-items-center'>
            {renderLogo(node, "NodeJs")}
            {renderLogo(react, "React")}
            {renderLogo(ror, "Ruby on Rails")}    
            {renderLogo(vue, "VueJs")}    
        </div>
    </>
  )
}
