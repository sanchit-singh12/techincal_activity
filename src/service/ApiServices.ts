import axios, { AxiosError } from "axios"
import { ApiData } from "../types/types"

const ApiUrl = "https://swapi.dev/api/people/?page=1"


export async function getAPIData(url: string = ApiUrl): Promise<ApiData> {
    try {
        let response = await axios.get<ApiData>(url)
        return response?.data
    }
    catch (err) {
        let apiError = err as AxiosError<{ message: string }> | Error
        if (axios.isAxiosError(apiError)) {
            if (apiError.response?.data) {
                return Promise.reject(apiError.response?.data.message)
            }
            return Promise.reject(apiError.message)
        }
        return Promise.reject(apiError)
    }
}