import Create from "./Create";
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
                <Create />
            </Router>
        )
    })

    test('input text value', () => {

        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <Create />
            </Router>
        )
        userEvent.type(screen.getByRole('textbox'), 'task')
        expect(screen.getByRole('textbox')).toHaveValue('task')
    })

    it('Alert if the input is not filled', async () => {
        const history = createMemoryHistory();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation();
        const setTasks = jest.fn()
        const { getByTestId } = render(
            <Router location={history.location} navigator={history}>
                <Create tasks={[{ "name": "test" }]} setTasks={setTasks}/>
            </Router>
        )
        fireEvent.click(getByTestId('button-create'))
        expect(alertMock).toHaveBeenCalledTimes(1)
    })
})