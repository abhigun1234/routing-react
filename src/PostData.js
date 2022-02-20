import React,{useState} from 'react';

function PostData(props) {
    const [personInfo,setName]=useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
             <input value={personInfo.firstName} onChange={e=>setName({...personInfo,firstName:e.target.value})} type="text"></input>
             <input value={personInfo.lastname} onChange={e=>setName({...personInfo,lastName:e.target.value})} type="text"></input>
            <h2>{personInfo.firstName}</h2>
            <h2>{personInfo.lastName}</h2>
            <h3>{JSON.stringify(personInfo)}</h3>
       
            </form>
        </div>
    );
}

export default PostData;