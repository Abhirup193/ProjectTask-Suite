import React,{useState} from "react";
import ProjectSidebar from "./components/Projectsidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Selected from "./components/SelectedProject";

function App() {
  const [projectstate,setprojectstate]=useState({
    selectedProjectId:undefined,
    projects:[]
  });

  function handlecancel(){
    setprojectstate(prevstate=>{
      return {
        ...prevstate,
        selectedProjectId:undefined
      };
    });
  }

  function handleAddProject(){
    setprojectstate(prevstate=>{
      return {
        ...prevstate,
        selectedProjectId:null,
      };
    });
  }
  function handleSelect(id){
    setprojectstate(prevstate=>{
      return {
        ...prevstate,
        selectedProjectId:id,
      };
    });
  }

  function handleinput(projectdata){
    setprojectstate(prevstate=>{
      const projectid=Math.random();
      const newproject={
        projectdata,
        id:projectid
      };
      return {
        projects:[...prevstate.projects,newproject],
        selectedProjectId:undefined
      };
    });
  }

  function handledelete(id){
    setprojectstate(prevstate=>{
      const project=prevstate.projects.filter((proj)=>{
        return proj.id!==id;
      });
      return {
        selectedProjectId:undefined,
        projects:project
      };
    });
  }
console.log(projectstate);

  const reqproject=projectstate.projects.find((project)=>project.id===projectstate.selectedProjectId);
  let content=<Selected project={reqproject} onDelete={handledelete}/>;

  if(projectstate.selectedProjectId===null)
  {
    content=<NewProject onAdd={handleinput} onCancel={handlecancel}/>;
  }
  else if(projectstate.selectedProjectId===undefined)
  {
    content=<NoProjectSelected onClickNewProject={handleAddProject}/>;
  }

  return (
    <div>
    <h1 className="text-center text-4xl pt-4 text-blue-800 font-bold">ProjectTask Suite</h1>
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onClickAddProject={handleAddProject} onSelect={handleSelect} currprojects={projectstate.projects} selectedprojectid={projectstate.selectedProjectId}/>
      {content}      
    </main>
    </div>
  );
}

export default App;
