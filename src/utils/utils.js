import { useState } from "react"
import { FITCOACH_DATA } from "../data/data.js"

export const pedirDatos = () => {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(FITCOACH_DATA)
        })
    })
}