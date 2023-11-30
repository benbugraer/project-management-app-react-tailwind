import {useState} from "react";

export default function NewTask({onAdd}) {
	const [enteredTask, setEnteredTask] = useState("");

	function handleChange(event) {
		setEnteredTask(event.target.value);
	}

	function handleClick() {
		if (enteredTask.trim() === "") {
			return
		}
		onAdd(enteredTask)
		setEnteredTask('')
	}

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				onChange={handleChange}
				value={enteredTask}
				className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
			<button
				onClick={handleClick}
				className="text-xl  px-3 py-1 text-stone-50 bg-green-600 border-[0.15rem] border-stone-900 rounded-lg hover:bg-green-400 hover:text-stone-800 transition-colors">
				+ Add
			</button>
		</div>
	)
}