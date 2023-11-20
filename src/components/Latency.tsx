import moment from 'moment';
import { cn } from '@/lib/utils.ts';

type LatencyProps = {
    from: Date | string;
    to: Date | string;
};

const calcLatency = (from: Date | string, to: Date | string) => Math.abs(moment(to).diff(from, 's'));

const Latency = ({ from, to }: LatencyProps) => {
    let unit = 's',
        latency = calcLatency(from, to);

    if (latency > 86400) {
        unit = 'd';
        latency = latency / 86400;
    } else if (latency > 3600) {
        unit = 'hrs';
        latency = latency / 3600;
    } else if (latency > 120) {
        unit = 'min';
        latency = latency / 60;
    }

    return (
        <span
            className={cn(`font-bold`, {
                'text-red-600': latency > 30,
                'text-yellow-500': latency > 7 && latency <= 30,
                'text-[rgb(100,250,50)]': latency <= 7,
            })}
        >
            {Math.round(latency)} {unit}
        </span>
    );
};

export default Latency;
