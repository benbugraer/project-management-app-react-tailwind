import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import Buttons from "./Buttons";

export default function NewProject({ onAdd, onCancel }) {
   const modal = useRef();
   const modalCancel = useRef();

   const title = useRef();
   const description = useRef();
   const dueDate = useRef();

   function handleSave() {
      const enteredTitle = title.current.value;
      const enteredDescription = description.current.value;
      const enteredDueDate = dueDate.current.value;

      //validation...
      if (
         enteredTitle.trim() === "" ||
         enteredDescription.trim() === "" ||
         enteredDueDate.trim() === ""
      ) {
         modal.current.open();
         return;
      }
      onAdd({
         title: enteredTitle,
         description: enteredDescription,
         dueDate: enteredDueDate,
      });
   }

   function handleCancel() {
      modalCancel.current.open();
      return;
   }

   function onCancelConfirmed() {
      onCancel();
   }

   return (
      <>
         <Modal
            ref={modalCancel}
            buttonCaption="I'm sure"
            onConfirm={onCancelConfirmed}
         >
            <h2 className="font-bold text-stone-600 mt-2">
               Are you sure to return to the homepage?
            </h2>
         </Modal>
         <Modal ref={modal} buttonCaption="Okay">
            <h2 className="text-stone-800 uppercase font-bold text-xl">
               Invalid Input!!!
            </h2>
            <p className="font-bold text-stone-600 mt-2">
               Opps ... looks like you forgot to enter a value.
            </p>
            <p className="font-bold text-stone-600 mt-2">
               Please make sure you provide a valid value for every input field.
            </p>
         </Modal>
         <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
               <li>
                  <button
                     onClick={handleCancel}
                     className="px-6 py-2 rounded-full text-stone-50 bg-red-500 hover:bg-red-600"
                  >
                     Cancel
                  </button>
               </li>
               <li>
                  <button
                     onClick={handleSave}
                     className="px-6 py-2 rounded-full bg-stone-800 text-stone-50 hover:bg-stone-950"
                  >
                     Save
                  </button>
               </li>
            </menu>
            <div>
               <Input type="text" ref={title} label="Title" />
               <Input ref={description} label="Description" textarea={true} />
               <Input type="date" ref={dueDate} label="Due Date" />
            </div>
         </div>
      </>
   );
}
