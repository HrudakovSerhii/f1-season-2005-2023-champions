import React, { Suspense } from 'react'

import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router'

import App from '../App'

import NoRouteMatch from './NoRouteMatch'

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
                <Route path="*" element={<NoRouteMatch />} />
            </Route>
        </Route>
    )
)

export default appRouter
