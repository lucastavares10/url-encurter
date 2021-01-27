module.exports = {
    apps: [
        {
            name: "url-encurter",
            script: "src/init.js",
            watch: true,
            env: {
                NODE_ENV: "production",
            }
        }
    ]
}
