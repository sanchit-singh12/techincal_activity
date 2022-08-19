/**
 * @jest-environment jsdom
 */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

import Home from "../components/Home"
import { render } from "@testing-library/react"


describe('Component testing', () => {
    test('if home component is rendering initially', () => {
        const { getByTestId } = render(<Home />)
        expect(getByTestId('layout-container')).toBeDefined()
    })
})

