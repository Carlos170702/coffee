import { Route, Routes } from 'react-router-dom'
import { Login, Register } from '../auth/pages'
import { CoffeeRouter } from '../coffe/router/CoffeeRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRoutes = () => {
    return (
        <>
            <Routes>

                <Route path='login' element={
                    <PublicRouter>
                        <Login />
                    </PublicRouter>
                } />

                <Route path='register' element={
                    <PublicRouter>
                        <Register />
                    </PublicRouter>
                } />

                <Route path='/*' element={
                    <PrivateRouter >
                        <CoffeeRouter />
                    </PrivateRouter>
                        
                } />

            </Routes>

        </>

    )
}
