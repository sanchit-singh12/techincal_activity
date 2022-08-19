import React, { useEffect, useState, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAPIData } from '../service/ApiServices'
import { ServiceContext } from '../service/context/context';
import { ApiData, ResultData, ServiceContextType } from '../types/types'
import './index.css'

const Home: React.FunctionComponent = (props) => {

    const history = useNavigate();                   // Using useNavigate hook for changing the route

    const { charactersList = [] } = useContext(ServiceContext) as ServiceContextType   // Destructuring the Character Listing from Service Context


    const onCardClick = (data: ResultData, index: number) => {        // Function used for triggering the route change with character detail passed in params of route
        history("detail", { state: { detail: data, index } })
    }

    return (                                                            // JSX for dispalying the character cards
        <div data-testid="layout-container" className='container'>
            {charactersList && charactersList.length ? charactersList?.map((item, index) => {
                return (
                    <div data-test="layout-card" key={item.name} className='card-layout' onClick={() => onCardClick(item, index)}>
                        <h3>
                            {item.name}
                        </h3>
                        <div>
                            Gender: {item.gender}
                        </div>
                        <div>
                            Height: {item.height}
                        </div>
                    </div>
                )
            }) : <div className='no-data-container'><h1>Loading....</h1></div>}
        </div >
    )
}

export default Home