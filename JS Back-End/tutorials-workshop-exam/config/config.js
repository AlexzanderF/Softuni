module.exports = {
    development: {
        port: process.env.PORT || 8080,
        SECRET: 'makashi',
        DB_URI: 'mongodb://localhost:27017/tutorials-workshop'
    },
    production: {
        port: process.env.PORT || 8080,
        SECRET: 'makashi',
        DB_URI: 'atlas uri!!!'
    }
}[process.env.NODE_ENV.trim()];