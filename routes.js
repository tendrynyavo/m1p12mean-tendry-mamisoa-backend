let routes = [
    {
        path: '/login',
        route: require('./routes/loginRoutes')
    },
    {
        path: '/users-auth',
        route: require('./routes/userAuthRoutes')
    },
    {
        path: '/users',
        route: require('./routes/userRoutes')
    },
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