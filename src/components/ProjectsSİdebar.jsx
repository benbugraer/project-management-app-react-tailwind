import Buttons from "./Buttons";

export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}) {
	return (
		<aside
			className="w-1/3 px-8 py-16 bg-stone-900 text-stone-500 md:w-72 rounded-r-xl">
			<h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">
				Your Projects
			</h2>
			<Buttons onClick={onStartAddProject}>+ Add Projects</Buttons>
			<ul className="mt-8">
				{projects.map((project) => {
					let css =
						"w-full text-left px-2 py-1 border-b-2 border-stone-500 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 hover:rounded-xl";
					if (project.id === selectedProjectId) {
						css += "bg-red-500 text-stone-200";
					} else {
						css += "text-stone-400";
					}

					return (
						<li key={project.id}>
							<button
								className={css}
								onClick={() => onSelectProject(project.id)}
							>
								{project.title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
}
