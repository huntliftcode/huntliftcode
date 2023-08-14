import genesysLogo from '/companies/genesys_logo.png' 
import bluelavaLogo from '/companies/bluelava_logo.png' 

export default function WorkExperience() {
    return (
        <>
            <h1>Work Experience</h1>
            <div className='grid grid-rows-2 gap-24'>
                <div className='grid grid-cols-12 gap-12 items-center'>
                    <img src={bluelavaLogo} className='m-auto col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                    <div className='col-span-9 mt-6'>
                        <div className='grid grid-rows-10'>
                            <div className='row-span-2'>
                                <h2>Senior Software Engineer</h2>
                            </div>
                            <div className='row-span-1 pb-4'>
                                <h3>April 2022 - Present</h3>
                            </div>
                            
                            <div className='row-span-6'>
                                As a startup, BlueLava has given me the opportunity to fill a wide variety of roles.  I developed and improved their infrastructure as code migrating from boto python 2.7 scripts to a mixture of python 3.10 IaC and cloudformation, using stacksets for the single tenant AWS environment.  I also worked on a variety of product development initiatives from designing and implementing the product's data model and RESTful APIs to contributing to the frontend development in Vuejs and plain JavaScript.
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className='grid grid-cols-12 gap-12 place-content-around'>
                    <img src={genesysLogo} className='m-auto col-span-3 rounded-full border border-gray-100 shadow-sm'></img>
                    <div className='col-span-9 mt-6'>
                        <div className='grid grid-rows-10'>
                            <div className='row-span-2'>
                                <h2>Senior Software Engineer</h2>
                            </div>
                            <div className='row-span-1 pb-4'>
                                <h3>January 2016 - April 2022</h3>
                            </div>
                            <div className='row-span-8'>
                            At Genesys, I worked in two primary roles.  First, I work as an automated tester which gave me the ability to develop my java development skills across a wide codebase.  The majority of my time was spent developing an internal application for engineer triaging from the ground up.  I developed and owned several services to facilitate that application's ETL pipeline and database.  That opportunity allowed me to develop intimate knowledge of how the product worked and how the devops system was structured.  It also provided me the ability to intimately know our major third party data providers as we collected data from new relic and pagerduty for our pipeline.  In addition to the pipeline, I contributed to the frontend development using React.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}