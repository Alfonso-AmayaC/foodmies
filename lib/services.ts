import { pantryItem } from "../types";

const baseURL = '/api';

export const getData = (path : string) => {
    try{
        return fetch(`${baseURL}/${path}`)
              .then((res) => res.json())
    }
    catch(err) {
        console.log("Error from getData: ",err.message);
        return new Promise((_, reject) => {reject(err.message)})
    }
}

export const createData = (path : string, body : string) => {
    const init : { body: string, method: string, headers: any } = {
        body: JSON.stringify(body),
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
    }
    try{
        return fetch(`${baseURL}/${path}`, init)
              .then((res) => res.json())
    }
    catch(err) {
        console.log("Error from updateData: ",err.message);
        return new Promise((_, reject) => {reject(err.message)})
    }
}

export const updateData = (path : string, body : any) => {
    const init : { body: string, method: string, headers: any } = {
        body: JSON.stringify(body),
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
    }
    try{
        return fetch(`${baseURL}/${path}`, init)
              .then((res) => res.json())
    }
    catch(err) {
        console.log("Error from updateData: ",err.message);
        return new Promise((_, reject) => {reject(err.message)})
    }
}

export const deleteData = (path : string) => {
    
}