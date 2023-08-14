import java from "/languages/java_logo.png"
import ruby from "/languages/ruby_logo.png"
import python from "/languages/python_logo.png"
import javascript from "/languages/javascript_logo.svg"
import postgres from "/languages/postgresql.svg"

import { Tabs, FlowbiteTabTheme, Flowbite, CustomFlowbiteTheme } from "flowbite-react"

export default function TechnicalSkills() {
    const customTheme: CustomFlowbiteTheme = { tab: {
        "base": "flex flex-col gap-2",
        "tablist": {
            "base": "flex text-center",
            "styles": {
            "default": "flex-wrap border-b",
            "underline": "flex-wrap -mb-px border-b",
            "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
            "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
            },
            "tabitem": {
            "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0",
            "styles": {
                "default": {
                "base": "rounded-t-lg",
                "active": {
                    "on": "bg-gray-100 text-slate-600 dark:bg-gray-800",
                    "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400"
                }
                },
                "underline": {
                "base": "rounded-t-lg",
                "active": {
                    "on": "text-slate-600 rounded-t-lg border-b-2 active",
                    "off": "border-b-2 border-transparent text-gray-500 hover:border-sky-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                }
                },
                "pills": {
                "base": "",
                "active": {
                    "on": "rounded-lg bg-slate-600 text-white",
                    "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100"
                }
                },
                "fullWidth": {
                "base": "ml-0 first:ml-0 w-full rounded-none flex",
                "active": {
                    "on": "p-4 text-gray-900 bg-gray-100 active rounded-none",
                    "off": "bg-white hover:text-gray-700 hover:bg-gray-50 rounded-none"
                }
                }
            },
            "icon": "mr-2 h-5 w-5"
            }
        },
        "tabpanel": "py-3"
        }
    }

    return (
        <Flowbite theme={{theme: customTheme}}>
            <h1>Technical Skills</h1>
            
            <Tabs.Group style="underline" >
                <Tabs.Item active title="Languages">
                    <div className="grid grid-rows-2">
                        <div className="grid grid-cols-7">
                            <img src={ruby} className='m-auto col-span-1 col-start-3 w-28 h-auto'></img>
                            <img src={javascript} className='m-auto col-span-1 col-start-5 w-28 h-auto'></img>
                        </div>
                        <div className="grid grid-cols-7">
                            <img src={postgres} className='m-auto col-span-1 col-start-2 w-28 h-auto'></img>
                            <img src={java} className='m-auto col-span-1 col-start-4 w-28 h-auto'></img>
                            <img src={python} className='m-auto col-span-1 col-start-6 w-28   h-auto'></img>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Development Tools" >
                    <p> This is </p>
                </Tabs.Item>
                <Tabs.Item title="AWS" >
                    <p>
                    <span className="font-medium text-gray-800 dark:text-white">
                        Settings tab's associated content
                    </span>
                    </p>
                </Tabs.Item>
                <Tabs.Item title="Frameworks/Libraries" >
                    <p>
                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                    </p>
                </Tabs.Item>
            </Tabs.Group>

        </Flowbite>
    )
}