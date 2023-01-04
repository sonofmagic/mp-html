const path = require("path")
const copy = require('./cp')
const staticPath = path.resolve(__dirname, "../static")

const mpHtmlPath = path.resolve(__dirname, "../components/mp-html")

const pMap = {
    static: staticPath,
    "mp-html": mpHtmlPath,
}


async function main(t) {
    const cwd = process.cwd()
    const source = pMap[t]
    if (!source) {
        throw new TypeError("target must be 'static' or 'mp-html' !")
    }
    const p = process.argv.slice(2)
    let target
    if (!p[0]) {
        target = "static"
        await copy(source, path.resolve(cwd, target))
    } else {
        target = p[0]
        if (path.isAbsolute(target)) {
            await copy(source, target)
        } else {
            await copy(source, path.resolve(cwd, target))
        }
    }
}

module.exports = main
