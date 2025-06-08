import { useEffect, useState } from "react"

export const Github = (props) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/bitturana-ab")
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} width={100} alt="" />
        <p className="p-3 bg-red-200 text-black mt-3 mb-4">Github data : {data.login}</p>
        < p className="p-3 bg-blue-300 text-black">Github Bio : {data.bio}</p>
    </div>
    
  )
}

