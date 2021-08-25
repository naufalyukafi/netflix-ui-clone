export interface IMovie {
    id: number,
    title: string,
    backdrop_path: string,
    original_name: string,
    poster_path: string,
    name: string,
    overview: string,
}

export interface IRow {
    title: string,
    fetchUrl: string,
    isLargeRow?: true
}
