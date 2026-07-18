const Skills = (props) => {
    const Icon = props.icon

    return (
        <div className="skills-card flex-col justify-center items-center px-6 py-2 bg-gray-900 rounded-t-3xl c-shape-squircle gap-2 flex hover:scale-110 transition-all duration-500 cursor-pointer border-b-[2px] border-cyan-600">
            <h3 className="text-cyan-600 text-xl">{props.nome}</h3>
            <Icon className="text-cyan-600 text-center text-6xl" />
        </div>
    )
}

export default Skills
