'use client'

import { usePathname } from 'next/navigation'

export function useIsStudentPage() {
    const pathname = usePathname()
    return pathname.includes('/student')
}
