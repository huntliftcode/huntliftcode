import { Link } from 'react-router-dom'
interface Props {
    name: string, 
    href: string, 
    current: boolean
    key: string,
}

export default function NavbarItem(props: Props) {
    const renderClassNames = () => {
        let classes = 'rounded-md px-3 py-3 text-md font-medium'
        let selectedClasses = props.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        return `${classes} ${selectedClasses}`
    }

    return (
        <>
        <Link to={props.href}
            key={props.name}
            className={renderClassNames()}
            aria-current={props.current ? 'page' : undefined}
            >
            {props.name}
        </Link>
        </>
    )
}