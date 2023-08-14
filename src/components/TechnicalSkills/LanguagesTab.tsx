import java from "/languages/java_logo.png"
import ruby from "/languages/ruby_logo.png"
import python from "/languages/python_logo.png"
import javascript from "/languages/javascript_logo.svg"
import postgres from "/languages/postgresql.svg"

import { Tooltip } from 'flowbite-react';

export default function LanguagesTab() {

    const renderLogo = (logo: string, tooltip: string) => {
        return (
            <Tooltip content={tooltip}>
                <img src={logo} className={'w-28 h-auto hover:cursor-help'}></img>
            </Tooltip>
        )
    }

    return (
        <>
            <div className="grid grid-rows-2">
                <div className="grid grid-cols-7">
                    <span className="m-auto col-span-1 col-start-3">
                        {renderLogo(ruby, "Ruby")}
                    </span>
                    
                    <span className="m-auto col-span-1 col-start-5">
                        {renderLogo(javascript, "JavaScript")}
                    </span>
                </div>
                <div className="grid grid-cols-7">
                    <span className="m-auto col-span-1 col-start-2">
                        {renderLogo(postgres, "PostgreSQL")}
                        </span>
                    <span className="m-auto col-span-1 col-start-4">
                        {renderLogo(java, "Java")}</span>
                    <span className="m-auto col-span-1 col-start-6">
                        {renderLogo(python, "Python")}
                    </span>
                </div>
            </div>
        </>
    )
}