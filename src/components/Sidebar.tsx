import { cn } from '@/lib/utils';
import routes from '@/routes.ts';
import { Link } from 'react-router-dom';

export function Sidebar() {
    return (
        <div className={cn('pb-12')}>
            <div className="space-y-4 py-4">
                {routes.map((r) => (
                    <div key={r.label} className="px-3 py-2">
                        <h2 className="mb-2 px-4 text-sm font-semibold tracking-tight text-gray-400">{r.label}</h2>
                        <div className="space-y-1">
                            {r.children.map(({ name, icon: Icon, to }) => (
                                <Link
                                    to={to}
                                    key={name}
                                    className="group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:text-gray-500"
                                >
                                    <Icon className="mr-2 h-4 w-4" />
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
