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
    },
    {
        path: '/marques',
        route: require('./routes/marqueRoutes')
    }
]; 

module.exports = routes;