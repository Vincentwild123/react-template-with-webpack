import axios from 'axios'
import config from './axios.config.js'

const instance = axios.create(config);

export default instance;