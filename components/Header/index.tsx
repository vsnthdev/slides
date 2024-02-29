'use client'

import { KBar, KBarProvider, Header as VHeader, actions, useKBar } from 'vyaktitva'

function HeaderWrapper() {
    const { query } = useKBar()
    return <VHeader brand='Vasanth Srivatsa' onSearch={query.toggle} />
}

export function Header() {
    return <KBarProvider actions={actions}>
        <KBar />
        <HeaderWrapper />
    </KBarProvider>
}