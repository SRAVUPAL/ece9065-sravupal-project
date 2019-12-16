export interface ApplicationConfig {
    apiURL: string,
    getAllSongsurl: string
}

export const dbConfig: ApplicationConfig = {
    apiURL: 'http://localhost:3000/api',
    getAllSongsurl: 'http://localhost:3000'
};