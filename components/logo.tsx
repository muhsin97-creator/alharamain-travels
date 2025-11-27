import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/logo.png"
            alt="Al-Haramain Travels"
            width={180}
            height={60}
            className={cn('h-10 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/logo-mark.png"
            alt="Al-Haramain Travels"
            width={60}
            height={60}
            className={cn('size-10', className)}
        />
    )
}
