import genesysLogo from '/companies/genesys_logo.png' 
import bluelavaLogo from '/companies/bluelava_logo.png' 

export default function WorkExperience() {
    return (
        <>
        <h1>Work Experience</h1>
        <div className='grid grid-rows-2 gap-24'>
            <div className='grid grid-cols-12 gap-12 items-center'>
                <img src={bluelavaLogo} className='m-auto col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                <p className='col-span-9 mt-6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            
            
            <div className='grid grid-cols-12 gap-12 place-content-around'>
                <img src={genesysLogo} className='m-auto col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                <p className='col-span-9 mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </>
    )
}