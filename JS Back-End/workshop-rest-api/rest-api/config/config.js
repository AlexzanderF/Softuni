module.exports = {
    development: {
        port: process.env.PORT || 7000,
        DB_URI: 'mongodb://localhost:27017/rest-demo',
        SECRET: 'poop'
    },
    production: {

    }
}[process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'];