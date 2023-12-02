import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
   return (
      <p className="flex flex-col gap-1 my-4">
         <label className="text-sm uppercase font-bold text-stone-500">
            {label}
         </label>
         {textarea ? (
            <textarea
               ref={ref}
               {...props}
               className="input-textarea-styling "
            /> // More info index.css
         ) : (
            <input ref={ref} {...props} className="input-textarea-styling " />
         )}
      </p>
   );
});

export default Input;
