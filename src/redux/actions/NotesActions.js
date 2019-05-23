import axios from 'axios';

const Base_URL = 'http://comunicacion-a.hidalgo.gob.mx/traer/notas';


const GET_DATA_ACTION=()=>{

    return{
        type:"GET_DATA",
        payload: axios.post(Base_URL)
    };

}

export {GET_DATA_ACTION};