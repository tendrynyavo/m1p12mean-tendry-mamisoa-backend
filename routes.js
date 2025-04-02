let routes = [
    {
        path: '/login',
        route: require('./routes/loginRoutes')
    },
    {
        path: '/users',
        route: require('./routes/userRoutes')
    },
    {
        path: '/users-auth',
        route: require('./routes/userAuthRoutes')
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
    },
    {
        path: '/voitures',
        route: require('./routes/voitureRoutes')
    },
    {
        path: '/motorisations',
        route: require('./routes/motorisationRoutes')
    },
    {
        path: '/besoins',
        route: require('./routes/besoinRoutes')
    },
    {
        path: '/diagnostics',
        route: require('./routes/diagnosticRoutes')
    },
    {
        path: '/realisations',
        route: require('./routes/diagnosticRoutes')
    }
]; 

module.exports = routes;