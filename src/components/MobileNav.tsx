import * as React from 'react';
import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/useLockBody';
import routes from '@/routes.ts';
import { Link } from 'react-router-dom';
import Logo from '@/components/common/Logo.tsx';

interface MobileNavProps {
    children?: React.ReactNode;
}

export function MobileNav({ children }: MobileNavProps) {
    useLockBody();

    return (
        <div
            className={cn(
                'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <Link to="/" className="flex items-center space-x-2">
                    <Logo />
                </Link>
                <nav className="grid grid-flow-row auto-rows-max text-sm">
                    {routes.map((r) => (
                        <div key={r.label}>
                            <p className={'text-xs text-gray-400'}>{r.label}</p>
                            {r.children.map((c, i) => (
                                <Link
                                    key={i}
                                    to={c.to}
                                    className={cn(
                                        'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline',
                                        c.disabled && 'cursor-not-allowed opacity-60'
                                    )}
                                >
                                    {c.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </nav>
                {children}
            </div>
        </div>
    );
}
