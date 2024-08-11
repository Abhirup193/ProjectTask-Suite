import React from "react";
import Button from "./Button";

function ProjectSidebar({ onClickAddProject, currprojects,onSelect,selectedprojectid }) {
  // function mapproject(project) {
  //   return (
  //     <li key={project.id}>
  //       <button className="w-full text-left py-1 px-2 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
  //         {project.title}
  //       </button>
  //     </li>
  //   );
  // }

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl mt-8">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Your Projects</h2>
      <div>
      <Button onClick={onClickAddProject} text="+ Add Project" />
      </div>
      <ul className="mt-8">
        {currprojects.length > 0 ? 
          currprojects.map((project) => {

            let cssclass="w-full text-left py-2 px-1 rounded-sm my-2 bg-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-600";
            if(project.id===selectedprojectid){
              cssclass+=" bg-stone-800 text-stone-200";
            }
            else
            {
              cssclass+=" text-stone-400";
            }
            return (<li key={project.id}>
              <button onClick={()=>onSelect(project.id)} className="w-full text-left py-2 px-1 rounded-sm my-2 bg-stone-800 text-stone-300 hover:text-stone-100 hover:bg-stone-600">
              {project.projectdata.title}
              </button>
            </li>);
          })
         : (
          <li>No projects available</li>
        )}
      </ul>
    </aside>
  );
}

export default ProjectSidebar;
