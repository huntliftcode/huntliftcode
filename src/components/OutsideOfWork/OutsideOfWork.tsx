import { Tabs, Flowbite, Modal } from "flowbite-react"
import tabTheme from "../../themes/TabTheme.ts"
import deadlift from "/personal/deadlift.png"
import squat from "/personal/squat.png"
import bench from "/personal/bench.png"
import blind from "/personal/blind_hunt.jpg"
import bow from "/personal/bow_hunt.jpg"
// import LiftingInfoModal from "./LiftingInfoModal.tsx"
import Lift from "./Lift.ts"
import { useState } from "react"


export default function OutsideOfWork() {
    const [isOpen, setIsOpen] = useState({
        [Lift.squat]: false,
        [Lift.bench]: false,
        [Lift.deadlift]: false,
    });
    
    const liftingInfo: { [lift in Lift]: any } = {
        Squat: {
            best: 285,
            goal: 300
        },
        Bench: {
            best: 172.5,
            goal: 200
        },
        Deadlift: {
            best: 320,
            goal: 340
        }
    }
    
    const openModal = (lift: Lift) => {
        console.log(`Opening: ${lift}`, isOpen)
        setIsOpen({
            ...isOpen,
            [lift]: true
        })
    }
    
    const closeModal = (lift: Lift) => {
        setIsOpen({
            ...isOpen,
            [lift]: false
        })
    }

    return (
        <Flowbite theme={{theme: tabTheme}}>
            <h1>Outside of Work</h1>
            <Tabs.Group style="underline">
                <Tabs.Item active title="Powerlifting" >
                    <div className="grid grid-cols-3 place-content-around py-8">
                        <Modal show={isOpen[Lift.squat]} onClose={() => closeModal(Lift.squat)}>
                            <Modal.Header>{Lift.squat}</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <div className="text-base leading-relaxed text-gray-500">
                                        <h3>Personal Best:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.squat].best}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.squat].best * 2.204)} 
                                            </div>
                                        </div>
                                        <h3>Personal Goal:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.squat].goal}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.squat].goal * 2.204)} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <img 
                            src={squat} 
                            className='m-auto col-span-1 w-96 h-auto rounded-3xl hover:cursor-pointer'
                            onClick={() => openModal(Lift.squat)}
                        >
                        </img>
                        <Modal show={isOpen[Lift.bench]} onClose={() => closeModal(Lift.bench)}>
                            <Modal.Header>{Lift.bench}</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <div className="text-base leading-relaxed text-gray-500">
                                        <h3>Personal Best:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.bench].best}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.bench].best * 2.204)} 
                                            </div>
                                        </div>
                                        <h3>Personal Goal:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.bench].goal}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.bench].goal * 2.204)} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <img 
                            src={bench} 
                            className='m-auto col-span-1 w-96 h-auto rounded-3xl hover:cursor-pointer'
                            onClick={() => openModal(Lift.bench)}
                        >    
                        </img>
                        <Modal show={isOpen[Lift.deadlift]} onClose={() => closeModal(Lift.deadlift)}>
                            <Modal.Header>{Lift.deadlift}</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                <div className="text-base leading-relaxed text-gray-500">
                                        <h3>Personal Best:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.deadlift].best}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.deadlift].best * 2.204)} 
                                            </div>
                                        </div>
                                        <h3>Personal Goal:</h3>
                                        <div className="pl-4">
                                            <div>
                                                Kilograms: {liftingInfo[Lift.deadlift].goal}
                                            </div>
                                            <div>
                                                Pounds: {Math.round(liftingInfo[Lift.deadlift].goal * 2.204)} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <img 
                            src={deadlift} 
                            className='m-auto col-span-1 w-96 h-auto rounded-3xl hover:cursor-pointer'
                            onClick={() => openModal(Lift.deadlift)}   
                        > 
                        </img>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Hunting" >
                    <div className="grid grid-cols-6">
                        {/* <img src={blind} className='m-auto col-span-1 w-96 h-auto rounded-full'></img> */}
                        <img src={bow} className='m-auto col-span-2 w-96 h-auto rounded-xl'></img>
                        <p className='col-span-4 text-lg pt-4'>
                            I am an avid deer hunter and spend as much time as I can in the woods between October and January.  I happily hunt every open season but prefer archery season.  There is something about the transitioning fall weather and close encounters provided during archery hunting that keep me engaged at the highest level.  In addition to the draw of being in nature and refining the skills of hunting, the camaraderie in hunting camp might the most appealing aspects of this hobby.  
                        </p>
                    </div>
                </Tabs.Item>
            </Tabs.Group>

        </Flowbite>
    )
}