const axios = require('axios');
const ENDPOINT_URL = 'https://api.hypixel.net/skyblock';

/**
 * @memberOf Skyblock
 * @param {String} profileId ID of the Skyblock profile.
 * @param {String} key Hypixel API Key
 * @returns {Promise<Object>}
 * @example
 * hypixel.skyblock.getProfile(profileId, key).then(resp => console.log(resp));
 * @description Get the details of a skyblock profile, such as player stats, achievements, and inventories.
 * @since 1.0.0
 */
async function getProfile(profileId, key) {
    const res = await axios.get(`${ENDPOINT_URL}/profile`, {
        params: {
            key: key,
            profile: profileId
        }
    });
    return res.data;
}

/**
 * @memberOf Skyblock
 * @param {string} uuid Player UUID
 * @param {string} key Hypixel API Key
 * @returns {Promise<Object>}
 * @example
 * hypixel.skyblock.getProfiles(uuid, key).then(resp => console.log(resp));
 * @description Get a list of all the profiles a player has, including associated data found in the getProfile method.
 * @since 1.0.0
 */
async function getProfiles(uuid, key) {
    const res = await axios.get(`${ENDPOINT_URL}/profiles`, {
        params: {
            key: key,
            uuid: uuid
        }
    });
    return res.data;
}

/**
 * @namespace Skyblock
 * @description Methods that can retrieve data about Skyblock players and features.
 * @type {{getProfile: (function(*=, *=): any), getProfiles: (function(*=, *=): any)}}
 */
const skyblock = {
    getProfile,
    getProfiles
}
module.exports = skyblock;