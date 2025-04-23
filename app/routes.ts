import {type RouteConfig, route, layout} from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx'),
    route('api/create-trip', 'routes/api/create-trip.ts'),
    layout("routes/admin/admin-layout.tsx", [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
        route('trips', 'routes/admin/trips.tsx'),
        route('trips/create', 'routes/admin/create-trip.tsx')
    ]),
] satisfies RouteConfig;
