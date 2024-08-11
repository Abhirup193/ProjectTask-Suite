import React,{useRef} from "react";
import List from "./List";
import Modal from "./Modal";

function NewProject({onAdd,onCancel}) {
  const modal=useRef();
  const title=useRef();
  const description=useRef();
  const duedate=useRef();
  function handleSave(){
    const currtitle=title.current.value;
    const currdescription=description.current.value;
    const currduedate=duedate.current.value;

    if(currtitle.trim()===''||currdescription===''||currduedate==='')
    {
      modal.current.open();
      return;
    }

    onAdd({
      title:currtitle,
      description:currdescription,
      duedate:currduedate,
    })

  }
  return (
    <div>
    <Modal ref={modal} buttoncaption="Okay">
      <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
      <p className="text-stone-700 mb-4">Looks like you forgot to enter an input</p>
      <p className="text-stone-700 mb-4">Please Make sure you provide to fill each field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-1 my-4">
        <button onClick={onCancel} className="p-2 rounded-xl border-2 border-stone-900 text-stone-800 hover:text-stone-950">
          Cancel
        </button>
        <button onClick={handleSave}className="px-6 py-2 rounded-xl bg-stone-800 text-stone-50 hover:bg-stone-950 hover:bg-stone-500">
          Save
        </button>
      </menu>
      <div>
        <List type="text" ref={title} label="Title" />
        <List ref={description} label="Description" textarea />
        <List type="date" ref={duedate} label="Due Date" />
      </div>
    </div>
    </div>
  );
}

export default NewProject;
