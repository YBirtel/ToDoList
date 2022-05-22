const Task = ( {nom} ) => {
    return (
        <div className="tasks" data-testid="task">{nom}</div>    
    );
}
 
export default Task;