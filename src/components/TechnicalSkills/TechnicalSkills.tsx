
import tabTheme from "../../themes/TabTheme.ts"

import { Tabs, Flowbite } from "flowbite-react"
import AwsTab from "./AwsTab.tsx"
import LanguagesTab from "./LanguagesTab.tsx"
import DevToolsTab from "./DevToolsTab.tsx"
import FrameworksTab from "./FrameworksTab.tsx"

export default function TechnicalSkills() {
    return (
        <Flowbite theme={{theme: tabTheme}}>
            <h1>Technical Skills</h1>
            
            <Tabs.Group style="underline" >
                <Tabs.Item active title="Languages">
                    <LanguagesTab />
                </Tabs.Item>
                <Tabs.Item title="Development Tools" >
                    <DevToolsTab />
                </Tabs.Item>
                <Tabs.Item title="AWS" >
                    <AwsTab />
                </Tabs.Item>
                <Tabs.Item title="Frameworks/Libraries" >
                    <FrameworksTab />
                </Tabs.Item>
            </Tabs.Group>
        </Flowbite>
    )
}