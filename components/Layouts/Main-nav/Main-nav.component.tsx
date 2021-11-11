import Link from 'next/link'
import { Logo } from '../Logo/Logo.component'
import styles from './Main-nav.module.css'

export const MainNav = () => {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href='/posts'>Posts</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
