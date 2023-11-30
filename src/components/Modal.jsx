import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Buttons from "./Buttons";

const Modal = forwardRef(function Modal({children, buttonCaption, onConfirm}, ref) {
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(<dialog
		className="backdrop:bg-stone-900/90 p-4 rounded-lg shadow-md bg-red-100"
		ref={dialog}
	>
		{children}
		<form className="mt-4 text-right" method="dialog">
			<Buttons onClick={onConfirm}
			         className="bg-red-500 px-5 py-2 text-stone-50 rounded-lg hover:bg-red-400 hover:text-stone-950 transition-colors ">
				{buttonCaption}
			</Buttons>
		</form>
	</dialog>, document.getElementById("modal-root"),);
});

export default Modal;
