
import tabTheme from "../../themes/TabTheme.ts"

import { Tabs, Flowbite } from "flowbite-react"
import AwsTab from "./AwsTab.tsx"
import LanguagesTab from "./LanguagesTab.tsx"

export default function TechnicalSkills() {
    return (
        <Flowbite theme={{theme: tabTheme}}>
            <h1>Technical Skills</h1>
            
            <Tabs.Group style="underline" >
                <Tabs.Item active title="Languages">
                    <LanguagesTab />
                </Tabs.Item>
                <Tabs.Item title="Development Tools" >
                    <p> This is </p>
                </Tabs.Item>
                <Tabs.Item title="AWS" >
                    <AwsTab />
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