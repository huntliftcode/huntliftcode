import headshot from '/personal/headshot.png'


export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <div className="grid grid-cols-6">
                <div className="col-span-2">
                    <img src={headshot} className='max-w-sm h-auto rounded-3xl'></img>
                </div>
                <div className="col-span-4 text-lg">
                    <p className='pb-4'>
                        Hi!  I am Matt Harter.  A self starting, Senior Software Engineer with an uncanny ability to learn new skills to accomplish whatever task is at hand.  In my 7 years of professional experience, I have had the privilege of working across the gamete of engineering including product development, devops, internal application development, and automation engineering.
                    </p>
                    <p className='pb-4'>
                        In my latest roll, I was one of the engineers leading an effort to translate a single tenant Model View Controller (MVC), Ruby on Rails application into an API first multitenant application.  In this role, I design and implemented the RESTful API and the data model for the application.  I also played a large role in designing and implementing the CICD process using Github Actions and Terraform Cloud.  The application architecture includes hosted Kafka (AWS MSK) as the asynchronous backbone for data transfer and a Rails API only application built with Docker and deployed in ECS.
                    </p>
                    <p className='pb-4'>
                        In previous roles, I spent the majority of my time developing a ReactJS application with a Ruby on Rails and Go backend ETL pipeline built using AWS S3, SQS, EventBridge, and RDS.  This application was leveraged by product developers to triage realtime issue by aggregated data across internal and third party API data.
                    </p>
                    <p>
                        When not coding at work, I spend time training for competitive powerlifting and deer hunting.  I compete in the 220lb and 242lb weight classes with my best total being 1714lb in the 220lb weight class.  I try to plan competitions outside of the fall where I'm likely to be found sitting in a tree stand waiting for a white tailed deer to walk by.
                    </p>
                </div>
            </div>
        </>
    )
}