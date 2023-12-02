import NewTask from "./NewTask.jsx";

export default function Tasks({ onAdd, tasks, onDelete }) {
   return (
      <section>
         <h2 className="text-2xl font-bold text-stone-800 mb-4">Tasks</h2>
         <NewTask onAdd={onAdd} />
         {tasks.length === 0 && (
            <p className="text-stone-800 my-4 border-t-stone-500 border-t-2 mt-2.5">
               This project does not have any tasks yet.
            </p>
         )}
         {tasks.length > 0 && (
            <ul className="p-4 mt-8 rounded-xl bg-stone-100">
               {tasks.map((task) => (
                  <li key={task.id} className="flex justify-between my-4">
                     <span>{task.text}</span>
                     <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-500 hover:bg-red-400 text-stone-50 hover:text-stone-900  py-1 px-4 rounded-lg transition-colors"
                     >
                        Clear
                     </button>
                  </li>
               ))}
            </ul>
         )}
      </section>
   );
}
