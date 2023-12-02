
import axios from 'axios'

export const getData=async (url,callback)=>{
    const response=await axios.get(url)
    callback(response.data)
}