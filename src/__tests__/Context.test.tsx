/**
 * @jest-environment jsdom
 */

import React from 'react'
import ServiceProvider, { ServiceContext } from "../service/context/context"
import { render, fireEvent } from "@testing-library/react"

describe('<>', () => {
    function TestComponent() {
        const { charactersList, updateCharacterData } = React.useContext(ServiceContext);
        return (
            <div>
                {charactersList.length && <p data-testid="character-paragraph">{"Some keys"}</p>}
                <button onClick={() => updateCharacterData({ name: "Hero", hair_color: "", eye_color: "", gender: "", height: "" }, 0)}>Toggle</button>
            </div>
        )
    }
    test('', () => {
        const screen = render(
            <ServiceProvider>
                <TestComponent></TestComponent>
            </ServiceProvider>
        )

        fireEvent.click(screen.getByRole('button', { name: 'Toggle' }))
        expect(screen.getByTestId("character-paragraph")).toBeDefined()
    })
})