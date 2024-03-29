import React, { useEffect, useRef, useState } from "react";
import { ProjectCard } from "./projectCard";
import CursorFollower from "./mousefollower";


let data = [{
    companyName : "danka",
    year        : "2022",
    website     : "danka",
    counter     : 1,
    classes     : 'span-col-1-2',
    styles      : {
        backgroundColor: "#3F3B37"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "AxeSaone",
    counter     : 1,
    classes     : 'span-col-3-2',
    styles      : {
        backgroundColor: "#E7AA2C"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Archeologiefr",
    counter     : 1,
    classes     : 'span-col-1-3',
    styles      : {
        backgroundColor: "#DB4C44"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "EsoppGroup",
    counter     : 1,
    classes     : 'span-col-4-2',
    styles      : {
        backgroundColor: "#FBEFDF"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "VoeuxDanka",
    counter     : 1,
    classes     : 'span-col-1-2',
    styles      : {
        backgroundColor: "#FBEFDF"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "MAMCStEtienne",
    counter     : 1,
    classes     : 'span-col-3-3',
    styles      : {
        backgroundColor: "#E7AA2C"

    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "CapsurleRhone",
    counter     : 1,
    classes     : 'span-col-2-2',
    styles      : {
        backgroundColor: "#DB4C44"

    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "SabeMasson",
    counter     : 1,
    classes     : 'span-col-4-2',
    styles      : {
        backgroundColor: "#3F3B37"

    }
},
]
function ProjectSection(){
    const projectSectionRef = useRef();
    const [showCursor, setShowCursor]  = useState(false);
    // when use effect runs when component mounted
  
    useEffect(()=>{
        projectSectionRef.current.addEventListener("mouseover", ()=>{
            setShowCursor(true)
        })
        projectSectionRef.current.addEventListener("mouseleave", ()=>{
            setShowCursor(false)
        })
    })
    

   
    return(
        <>

        <div ref={projectSectionRef} className="project-section">
            {data.map((prCard, index)=>{
                return <ProjectCard key={index} data={prCard}/>
            })}
            {/* <ProjectCard data={data}/> */}
        </div>
        {showCursor? <CursorFollower/> : ""}
        </>
    )
}
export default ProjectSection;