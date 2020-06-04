const axios = require('axios');
const ENDPOINT_URL = 'https://api.hypixel.net';

/**
 * @memberOf Player
 * @param {String} uuid Player UUID.
 * @param {String} key Hypixel API Key.
 * @returns {Promise<Object>}
 * @example
 * hypixel.player.getPlayer(uuid, key).then(resp => console.log(resp));
 * @description Retrieve information about a Hypixel player, including stats, achievements, etc.
 * @since 1.0.0
 */
async function getPlayer(uuid, key) {
    const res = await axios.get(`${ENDPOINT_URL}/player`, {
        params: {
            uuid: uuid,
            key: key
        }
    });
    return res.data;
}

/**
 * @memberOf Player
 * @param {String} uuid Player UUID.
 * @param {String} key Hypixel API Key.
 * @returns {Promise<Object>}
 * @example
 * hypixel.player.getFriends(uuid, key).then(resp => console.log(resp));
 * @since 1.0.0
 * @description Get a player's list of friends.
 */
async function getFriends(uuid, key) {
    const res = await axios.get(`${ENDPOINT_URL}/friends`, {
        params: {
            uuid: uuid,
            key: key
        }
    });
    return res.data;
}

/**
 * @memberOf Player
 * @param {String} uuid Player UUID.
 * @param {String} key Hypixel API Key.
 * @returns {Promise<Object>}
 * @example
 * hypixel.player.getRecentGames(uuid, key).then(resp => console.log(resp));
 * @since 1.0.0
 * @description Get the most recent games that a player has participated in.
 */
async function getRecentGames(uuid, key) {
    const res = await axios.get(`${ENDPOINT_URL}/recentGames`, {
        params: {
            uuid: uuid,
            key: key
        }
    });
    return res.data;
}

/**
 * @memberOf Player
 * @param {String} uuid Player UUID.
 * @param {String} key Hypixel API Key.
 * @returns {Promise<Object>}
 * @example
 * hypixel.player.getRecentGames(uuid, key).then(resp => console.log(resp));
 * @since 1.0.0
 * @description Get a player's status, including their current game and whether or not they are online.
 */
async function getPlayerStatus(uuid, key) {
    const res = await axios.get(`${ENDPOINT_URL}/status`, {
        params: {
            uuid: uuid,
            key: key
        }
    });
    return res.data;
}
/**
 * @namespace Player
 * @type {{getPlayer: (function(*=, *=): any)}}
 */
const player = {
    getPlayer,
    getFriends,
    getRecentGames
}
module.exports = player;