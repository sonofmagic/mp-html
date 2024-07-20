const path = require('path')

const copy = require('./scripts/cp')

async function main() {
    const filelist = [
        'components',
        'static'
        // 'bin',
        // 'scripts',
        // 'package.json',
        // 'README.md'
    ]
    await Promise.all(filelist.map(x => {
        return [
            path.resolve(__dirname, '../dist/uni-app', x),
            path.resolve(__dirname, x),
        ]
    }).map(([src, dest]) => {
        return copy(src, dest, {
            overwrite: true,
            recursive: true,

        })
    }))
}

main()