module.exports = {
    development: {
        port: process.env.PORT || 8000,
        SECRET: 'verySecretSecret',
        DB_URI: 'mongodb://localhost:27017/expense-tracker',
        COOKIE_NAME: 'USER_AUTH'
    },
    production: {
        port: process.env.PORT || 8000,
        DB_URI: '',
        SECRET: 'verySecretSecret',
        COOKIE_NAME: 'USER_AUTH'
    }
}[process.env.NODE_ENV.trim()];