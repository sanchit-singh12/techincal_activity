/**
 * @jest-environment jsdom
 */

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: jest.fn().mockReturnValue({
        state: { detail: {} }
    })
}));


import { render } from "@testing-library/react"
import Detail from '../components/Detail';

test('if detail component is rendering initially', () => {
    const { getByTestId } = render(<Detail />)
    expect(getByTestId('detail-layout')).toBeDefined()
})