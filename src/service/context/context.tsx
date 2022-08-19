import React, { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { CharacterType, ResultData, ServiceContextType } from '../../types/types'
import { getAPIData } from '../ApiServices'


export const ServiceContext = createContext<ServiceContextType>({ charactersList: [], updateCharacterData: (data: CharacterType, index: number) => undefined })          // Creating the Context

const ServiceProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {       // Used Context for managing the Characters Listing as a Global State Managment Library 
    // In Order to reflect the changes in Listing (Home) Section done from Detail Section by Changing the details of gender and height of a particular character 
    const [charactersList, setData] = useState<ResultData[]>([])

    useEffect(() => {                                                   // Calling the Character Api in useEffect when component gets mount
        getAPIData().then((res) => {
            setData(res.results)
        })
        return () => { }
    }, [])

    const updateCharacterData = (data: CharacterType, index: number) => {             // Function for changing the character list gender and height and setting the setting the state
        let listCopy = [...charactersList]
        listCopy[index] = { ...listCopy[index], gender: data.gender, height: data.height }
        setData(listCopy)
    }

    return (                                                                          // Service Context Provider
        <ServiceContext.Provider value={{ charactersList, updateCharacterData }}>
            {children}
        </ServiceContext.Provider>)

}



export default ServiceProvider