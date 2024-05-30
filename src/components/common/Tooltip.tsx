import { Tooltip as BaseTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip.tsx';
import { forwardRef, ReactNode } from 'react';

type TooltipProps = {
    children: ReactNode;
    title: ReactNode;
    asChild?: boolean;
    placement?: 'top' | 'left' | 'bottom' | 'right';
};

const Tooltip = forwardRef<HTMLButtonElement, TooltipProps>(({ children, title, placement, asChild = false }, ref) => (
    <TooltipProvider>
        <BaseTooltip>
            <TooltipTrigger ref={ref} asChild={asChild}>
                {children}
            </TooltipTrigger>
            <TooltipContent side={placement}>{title}</TooltipContent>
        </BaseTooltip>
    </TooltipProvider>
));

Tooltip.displayName = 'Tooltip';

export default Tooltip;
