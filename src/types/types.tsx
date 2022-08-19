export type ApiData = {
  count: number,
  next: string,
  previous: null,
  results: ResultData[]
}


export type ResultData = {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: [],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string
}

export type LocationType = {
  hash: string
  key: string
  pathname: string
  search: string
  state: { detail: ResultData, index: number }
}

export type ServiceContextType = {
  charactersList: ResultData[],
  updateCharacterData: (data: CharacterType, index: number) => void
}

export type CharacterType = {
  name: string,
  hair_color: string,
  eye_color: string,
  gender: string,
  height: string

}