import {BASE_API_URL} from "../config";

const fetchProfile = async (token) => {
    const response = await fetch(`${BASE_API_URL}/users/profile?token=${token}`, {
        headers: {
            'authorization': token
        }
    });
    if (response.status == 403) {
        return false;
    }
    const json = await response.json();
    return json.data;
}

export {
    fetchProfile
}