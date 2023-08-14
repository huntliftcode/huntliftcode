import { CustomFlowbiteTheme } from "flowbite-react"

const tabTheme: CustomFlowbiteTheme = { 
    tab: {
        "base": "flex flex-col gap-2",
        "tablist": {
            "base": "flex text-center",
            "styles": {
            "default": "flex-wrap border-b",
            "underline": "flex-wrap -mb-px border-b",
            "pills": "flex-wrap font-medium text-md text-gray-500 space-x-2",
            "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col rounded-none"
            },
            "tabitem": {
            "base": "flex items-center justify-center p-4 rounded-t-lg text-md font-medium first:ml-0",
            "styles": {
                "default": {
                "base": "rounded-t-lg",
                "active": {
                    "on": "bg-gray-100 text-slate-600",
                    "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600"
                }
                },
                "underline": {
                "base": "rounded-t-lg",
                "active": {
                    "on": "text-slate-600 rounded-t-lg border-b-2 active",
                    "off": "border-b-2 border-transparent text-gray-500 hover:border-sky-300 hover:text-gray-600"
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

export default tabTheme