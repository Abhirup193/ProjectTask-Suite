import React from "react";
import Task from "./Task";

function Selected({project,onDelete}){

    const dateformatted=new Date(project.projectdata.duedate).toLocaleDateString('en-US',{
        
        year:'numeric',
        month:'short',
        day:'numeric'
    });
    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.projectdata.title}</h1>
            <button className="rounded-xl px-2 py-2 bg-stone-700 text-stone-300 hover:text-stone-100 hover:bg-stone-950" onClick={()=>onDelete(project.id)}>Delete</button>
            </div>
            <p className="mb-4 text-stone-400">{dateformatted}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.projectdata.description}</p>
        </header>
        <Task/>
    </div>
}

export default Selected;