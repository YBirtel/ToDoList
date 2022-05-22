import Modify from "./Modify";
import userEvent from "@testing-library/user-event";
import { fireEvent, render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe('CreateTask', () => {

    window.alert = jest.fn();

    test('render without errors', async () => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <Modify />
            </Router>
        )
    })

    test('display title', async () => {
        const history = createMemoryHistory();
        const { getByText } = render(
            <Router location={history.location} navigator={history}>
                <Modify />
            </Router>
        )
        const modifyPage = getByText(/Modification de la tâche/i)
        expect(modifyPage).toBeInTheDocument()
    })

    test('label test', async () => {
        const history = createMemoryHistory();
        const { getByLabelText } = render(
            <Router location={history.location} navigator={history}>
                <Modify />
            </Router>
        )
        const modifyLabel = getByLabelText(/Nom de la tâche/i)
        expect(modifyLabel).toBeInTheDocument()
    })

    test('input text value', () => {

        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <Modify tasks={[{ "name": "test" }]}/>
            </Router>
        )
        userEvent.type(screen.getByRole('textbox'), 'task')
        expect(screen.getByRole('textbox')).toHaveValue('task')
    })

    it('test modify button', async () => {
        const history = createMemoryHistory();
        const setTasks = jest.fn()
        const { getByTestId } = render(
            <Router location={history.location} navigator={history}>
                <Modify tasks={[{ "name": "test" }]} setTasks={setTasks}/>
            </Router>
        )
        fireEvent.click(getByTestId('modify'))
        expect(setTasks).toHaveBeenCalledTimes(1)
    })

})