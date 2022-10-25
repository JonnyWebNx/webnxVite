import axios, { AxiosInstance } from 'axios'
import { App } from 'vue'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}

export const injectionKey = Symbol('http')

// Creates global instance of Axios
export default {
    install: (app: App, options: AxiosOptions) => {
        const http = newAxiosInstance(options)
        app.provide(injectionKey, http)

        app.config.globalProperties.$http = http
    }
}

export function newAxiosInstance(options: AxiosOptions):AxiosInstance {
    const http = axios.create({
        baseURL: options.baseUrl ? options.baseUrl : import.meta.env.VITE_API_URL,
        headers: {
            common: {
                Authorization: options.token ? options.token : '',
                "Access-Control-Allow-Origin": import.meta.env.VITE_BASE_URL ? import.meta.env.VITE_BASE_URL : ''
            },
        },
        withCredentials: true
    })
    return http;
}