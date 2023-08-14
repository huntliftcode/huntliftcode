import auLogo from '/schools/au_logo.jpeg' 
import iuLogo from '/schools/iu_logo.png' 
import './Education.css'

export default function Education() {
    return (
    <>
        <h1>Education</h1>
        <div className='grid grid-rows-2 gap-4'>
            <div className='grid grid-cols-12 gap-12 place-content-around'>
                <img src={auLogo} className='m-auto max-h-52 col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                <p className='col-span-9 mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            
            <div className='grid grid-cols-12 gap-12 place-content-around'>
                <img src={iuLogo} className='m-auto max-h-64 col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                <p className='col-span-9 mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </>
    )
}