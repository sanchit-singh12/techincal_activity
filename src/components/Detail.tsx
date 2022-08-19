import React, { useEffect, useState, useContext } from 'react'
import { useParams, useLocation } from "react-router-dom";
import { getAPIData } from '../service/ApiServices';
import { ServiceContext } from '../service/context/context';
import { ApiData, CharacterType, LocationType, ResultData, ServiceContextType } from '../types/types'

const Detail: React.FunctionComponent = () => {

    const initialState = {
        name: "",
        hair_color: "",
        eye_color: "",
        gender: "",
        height: ""
    }
    const { state } = useLocation() as LocationType;

    const { updateCharacterData } = useContext(ServiceContext) as ServiceContextType

    const [toggle, setToggle] = useState<boolean>(false)

    const [characterDetails, setDetails] = useState<CharacterType>(initialState)

    useEffect(() => {
        const details: ResultData = state.detail
        const index: number = state.index
        setDetails({ name: details.name, hair_color: details.hair_color, eye_color: details.eye_color, gender: details.gender, height: details.height })
    }, [state])

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDetails({ ...characterDetails, [name]: value })
    }

    const onToggleButton = () => {
        setToggle((prevState) => {
            if (prevState) {
                updateCharacterData(characterDetails, state.index)
            }
            return !prevState
        })
    }

    return (
        <div data-testid="detail-layout" className='detail-container'>
            <h1>{characterDetails?.name ?? ""}</h1>
            <div className='character-features'>
                <h3>Hair Color - {characterDetails?.hair_color}</h3>
                <h3>Eye Color - {characterDetails?.eye_color}</h3>
                {!toggle ? <h3>Gender - {characterDetails?.gender ?? ""}</h3> : <div><h3 className="m-20">Gender</h3><input className='input' name="gender" value={characterDetails?.gender} onChange={(e) => onChangeText(e)} /></div>}
                {!toggle ? <h3>Height - {characterDetails?.height ?? ""}</h3> : <div><h3 className="m-20">Height</h3><input className='input' name="height" value={characterDetails?.height} onChange={(e) => onChangeText(e)} /></div>}
            </div>
            <button className="button-style" onClick={onToggleButton}>
                <h3>{toggle ? "Save" : "Edit"}</h3>
            </button>
        </div>
    )
}

export default Detail