import React, { Suspense } from 'react'

import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router'

import App from '../App'

import { HOME, SEASON } from '../constants'

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path={HOME} element={<App />}>
                <Route index element={<div>Home page</div>} />
                <Route
                    path={SEASON}
                    element={
                        <Suspense
                            children={<div>Season page</div>}
                            fallback={<div>Fallback page</div>}
                        />
                    }
                />
                <Route path="*" element={<div>No route match page</div>} />
            </Route>
        </Route>
    )
)

export default appRouter
