import React, { createContext, useEffect, useState, PropsWithChildren } from 'react'
import { CharacterType, ResultData, ServiceContextType } from '../../types/types'
import { getAPIData } from '../ApiServices'


export const ServiceContext = createContext<ServiceContextType>({ charactersList: [], updateCharacterData: (data: CharacterType, index: number) => undefined })

const ServiceProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

    const [charactersList, setData] = useState<ResultData[]>([])

    useEffect(() => {
        getAPIData().then((res) => {
            setData(res.results)
        })
        return () => { }
    }, [])

    const updateCharacterData = (data: CharacterType, index: number) => {
        let listCopy = [...charactersList]
        listCopy[index] = { ...listCopy[index], gender: data.gender, height: data.height }
        setData(listCopy)
    }

    return (
        <ServiceContext.Provider value={{ charactersList, updateCharacterData }}>
            {children}
        </ServiceContext.Provider>)

}



export default ServiceProvider