import { Status } from '@/lib/enums.ts';
import { Badge } from '@/components/ui/badge.tsx';
import { FaCalendarXmark, FaCheck, FaCircleExclamation, FaCircleInfo, FaHourglassStart } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { cn } from '@/lib/utils.ts';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';

type StatusChipType = {
    status?: Status;
    bg?: boolean;
    soft?: boolean;
    className?: string;
    statuses?: Status[];
    onStatusChange?: (status: Status) => void;
};

const StatusBadge = ({ status, statuses = [], onStatusChange }: StatusChipType) => {
    if (!status) return <p>N/A</p>;

    let Icon: IconType | undefined = undefined;

    if ([Status.COMPLETED, Status.ACTIVE, Status.PAID].includes(status)) {
        Icon = FaCheck;
    } else if (status === Status.PENDING) {
        Icon = FaHourglassStart;
    } else if (status === Status.REFUNDED) {
        Icon = FaCircleInfo;
    } else if ([Status.FAILED, Status.INACTIVE].includes(status)) {
        Icon = FaCircleExclamation;
    } else if ([Status.EXPIRED].includes(status)) {
        Icon = FaCalendarXmark;
    }

    const BadgeEl = (
        <Badge
            className={cn('space-x-1 pointer-events-none', {
                'bg-[#c1fdad] text-[#1f7503]': [Status.COMPLETED, Status.ACTIVE, Status.PAID].includes(status),
                'bg-[#ffe495] text-[#624900]': status === Status.PENDING,
                'bg-[#ffa995] text-[#621200]': [Status.FAILED, Status.INACTIVE].includes(status),
                'bg-[#d4f2ff] text-[#1978a2]': status === Status.REFUNDED,
                'bg-[#c0cfce] text-[#283434]': status === Status.EXPIRED,
            })}
        >
            {Icon && <Icon />}
            <small>{status}</small>
        </Badge>
    );

    if (statuses && statuses?.length > 0 && onStatusChange)
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>{BadgeEl}</DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {statuses.map((s) => (
                        <DropdownMenuCheckboxItem
                            key={s}
                            checked={s === status}
                            onCheckedChange={(checked) => checked && onStatusChange(s)}
                        >
                            {s}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );

    return BadgeEl;
};

export default StatusBadge;
