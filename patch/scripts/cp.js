/* eslint-disable no-console */
const fs = require("fs-extra")
/**
 * 
 * @param {string} source 
 * @param {string} destination 
 * @param {fs.CopyOptions | undefined} options 
 */
async function copy(source, destination, options) {
    await fs.copy(source, destination, options)
    console.log(`[copy success!]\nfrom: ${source}\nto: ${destination}`)
}

module.exports = copy