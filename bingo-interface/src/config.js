// Configuration for TMDB
// To se the latest configuration fetch it from https://api.themoviedb.org/3/configuration?api_key=019e8f375549e0bbd4a4191862ebc88f

const BASE_API_URL = 'http://ec2-18-225-9-33.us-east-2.compute.amazonaws.com:8080/bingo';
const NEXT_RANDOM = '/getNextRandom';
const CURRENT_NUMBERS = '/getCurrentNumbers';
const RESET_GAME = '/resetGame';

export {
    BASE_API_URL,
    NEXT_RANDOM,
    CURRENT_NUMBERS,
    RESET_GAME
}