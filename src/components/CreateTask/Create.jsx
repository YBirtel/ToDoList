import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md'



const Create = ({tasks, setTasks }) => {

    function createTask(name, e) {
        if (!name) {
            alert("Veuillez remplir le champ nom")
            e.preventDefault()
        }
        return setTasks([...tasks, { name: name }])
    }

    return (
        <>

            <label htmlFor="task-name">Nom de la tâche</label>
            <input type="text" id='task-name' required />
            <Link to="/">
                <button className='button add' data-testid="button-create" onClick={(e) => createTask(document.getElementById('task-name').value, e)}>Créer</button>
            </Link>
            <div className='back-div'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className='button back'><MdOutlineArrowBackIos />Retour</button>
                </Link>
            </div>
        </>
    );
}

export default Create