import { useRef } from "react";
import Modal from "./Modal.jsx";
import Tasks from "./Tasks.jsx";

export default function SelectedProject({
   project,
   onDelete,
   onAddTask,
   onDeleteTask,
   tasks,
}) {
   const modalCancel = useRef();

   function handleCancel() {
      modalCancel.current.open();
      return;
   }

   function onCancelConfirmed() {
      onDelete();
   }

   const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
   });
   return (
      <>
         <Modal
            onConfirm={onCancelConfirmed}
            ref={modalCancel}
            buttonCaption="Yes"
         >
            <h2 className="font-bold text-stone-600 mt-2">
               Are you sure you want to delete this project
            </h2>
         </Modal>
         <div className="w-[35rem] mt-12 border-2 border-stone-700 rounded-xl p-6">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
               <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold text-stone-600 mb-2">
                     {project.title}
                  </h1>
                  <button
                     onClick={handleCancel}
                     className="bg-red-500 ml-8 p-2 rounded-xl border-2 border-stone-700 text-stone-50 hover:bg-red-400 hover:text-stone-800 transition-colors"
                  >
                     Delete
                  </button>
               </div>
               <p className="mb-4 text-stone-400">{formattedDate}</p>
               <p className="text-stone-600 whitespace-pre-wrap">
                  {project.description}
               </p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
         </div>
      </>
   );
}
