import {BASE_API_URL} from "../config";

const fetchProfile = async (token) => {
    const response = await fetch(`${BASE_API_URL}/users/profile`, {
        headers: {
            'authorization': token
        }
    });
    const {status} = response;
    if (status == 403 || status == 401) {
        return false;
    }
    const json = await response.json();
    console.log(json);
    
    return json.data;
}

export {
    fetchProfile
}