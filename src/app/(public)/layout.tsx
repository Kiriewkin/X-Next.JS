import { Header } from '@/components/Header'
import type { PropsWithChildren } from 'react'

import styles from './index.module.scss'

export default function Layout({ children }: PropsWithChildren<unknown>) {
    return (
        <div className={`wrapper ${styles.layout}`}>
            <Header />
            <div className='w-full p-6 border-r border-gray-800'>
                {children}
            </div>
        </div>
    )
}