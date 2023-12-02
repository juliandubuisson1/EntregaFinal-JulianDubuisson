import { FITCOACH_DATA } from "../data/data"

export const pedirDatos = () => {

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(FITCOACH_DATA)
        },3000)
    })
}