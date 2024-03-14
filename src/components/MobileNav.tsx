import * as React from 'react';
import { cn } from '@/lib/utils';
import { useLockBody } from '@/hooks/useLockBody';
import routes from '@/routes.ts';
import { Link } from 'react-router-dom';

interface MobileNavProps {
    children?: React.ReactNode;
    onClose?: () => void;
}

export function MobileNav({ children, onClose }: MobileNavProps) {
    useLockBody();

    return (
        <div
            className={cn(
                'fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden'
            )}
            onClick={onClose}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
                <nav className="space-y-3 text-sm divide-y divide-dotted">
                    {routes.map((r, i) => (
                        <div key={r.label}>
                            <p
                                className={cn('text-gray-300 text-xs', {
                                    'mt-2': i > 0,
                                })}
                            >
                                {r.label}
                            </p>
                            {r.children.map((c, i) => (
                                <Link
                                    key={i}
                                    to={c.to}
                                    className={cn(
                                        'flex w-full items-center rounded-md p-1',
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
