import { Fragment } from 'react'
import { MainNav } from '../Main-nav/Main-nav.component'

export const Layout = ({ children }) => {
    return (
        <Fragment>
            <MainNav />
            <main>{children}</main>
        </Fragment>
    )
}
