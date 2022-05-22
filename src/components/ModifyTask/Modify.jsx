import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBackIos } from 'react-icons/md'


const Modify = ({ tasks, setTasks }) => {

    const { index } = useParams()

    function modifyTask(name) {
        if (name !== "") {
            tasks[index].name = name;
        }
        setTasks(tasks)
    }

    return (
        <>
            <h3>Modification de la tâche</h3>
            <label htmlFor="task-name">Nom de la tâche</label>
            <input type="text" id='task-name' data-testid="task-name" required/>
            <Link to="/">
                <button className='button modify' data-testid="modify" onClick={() => modifyTask(document.getElementById('task-name').value)}>Modifier</button>
            </Link>
            <div className='back-div'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='button back'><MdOutlineArrowBackIos />Retour</button>
                </Link>
            </div>
        </>
    );
}

export default Modify;