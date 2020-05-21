import {BASE_API_URL} from "../config";

const fetchProfile = async (token) => {
    const response = await fetch(`${BASE_API_URL}/users/profile?token=${token}`);
    const json = await response.json();
    return json.data;
}

export {
    fetchProfile
}