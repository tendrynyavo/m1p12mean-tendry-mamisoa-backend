let routes = [
    {
        path: '/articles',
        route: require('./routes/articleRoutes')
    },
    {
        path: '/categories',
        route: require('./routes/categoryRoutes')
    }
]; 

module.exports = routes;