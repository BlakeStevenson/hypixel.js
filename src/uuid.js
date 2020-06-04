const axios = require('axios');
const API_ENDPOINT = 'https://api.mojang.com/users/profiles/minecraft';
/**
 * @param name
 * @returns {Promise<boolean|*>}
 * @description Returns the player's UUID from the Mojang API, which is used for other API calls.
 * @example
 * hypixel.getUUID(name).then(resp => console.log(resp));
 */
async function getUUID(name) {
        const resp = await axios.get(`${API_ENDPOINT}/${name}`);
        if(resp.status === 404) {
            return false;
        } else {
            return resp.data.id;
        }
}
module.exports = getUUID();