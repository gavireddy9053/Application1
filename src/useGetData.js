import { useEffect, useState } from "react";

function useGetData(url){

    let [data,setData] = useState(null)

    async function fetchData(){
        let apidata = await fetch(url)
        let jsonData = await apidata.json()
        setData(jsonData)
    }

    useEffect(()=>{
        fetchData()
    },[])
    return data
}

export default useGetData