import auLogo from '/schools/au_logo.jpeg' 
import iuLogo from '/schools/iu_logo.png' 
import './Education.css'

export default function Education() {
    return (
    <>
        <h1>Education</h1>
        <div className='grid grid-rows-2 gap-4'>
            <div className='grid grid-cols-12 gap-12 place-content-around'>
                <img src={iuLogo} className='m-auto max-h-64 col-span-3 rounded-3xl border border-gray-100 shadow-sm'></img>
                <div className='col-span-9 mt-6'>
                    <div className='grid grid-rows-10 gap-4'>
                        <div className='row-span-2'>
                            <h2>M.S. Applied Data Science</h2>
                            <h3>Indiana University</h3>
                        </div>
                        <div className='row-span-1'>
                            <h3>August 2019 - December 2020</h3>
                            <h3>GPA: 3.96</h3>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className='grid grid-cols-12 gap-12 place-content-around'>
                <img src={auLogo} className='m-auto max-h-52 col-span-3 rounded-3xl border border-gray-100 shadow-sm'></img>
                <div className='col-span-9 mt-6'>
                    <div className='grid grid-rows-10 gap-4'>
                        <div className='row-span-2'>
                            <h2>B.A. Mathematics</h2>
                            <h2>B.A. Computer Science</h2>
                            <h3>Anderson University</h3>
                        </div>
                        <div className='row-span-1'>
                            <h3>August 2013 - December 2016</h3>
                            <h3>GPA: 3.82</h3>
                        </div>
                        <div className='row-span-1'>
                            <h3>Honors:</h3>
                            <h3 className='italic pl-4'>Honors in Mathematics</h3>
                            <h3 className='italic pl-4'>Magna Cum Laude</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}