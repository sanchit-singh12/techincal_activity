import React, { useEffect, useState, useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAPIData } from '../service/ApiServices'
import { ServiceContext } from '../service/context/context';
import { ApiData, ResultData, ServiceContextType } from '../types/types'
import './index.css'

const Home: React.FunctionComponent = (props) => {

    const history = useNavigate();

    const { charactersList = [] } = useContext(ServiceContext) as ServiceContextType


    const onCardClick = (data: ResultData, index: number) => {
        history("detail", { state: { detail: data, index } })
    }

    return (
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
            }) : <div className='no-data-container'><h1>No Data Found !</h1></div>}
        </div >
    )
}

export default Home