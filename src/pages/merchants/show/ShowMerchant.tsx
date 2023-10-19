import { useParams } from 'react-router-dom';
import Details from '@/pages/merchants/show/Details.tsx';

const ShowMerchant = () => {
    const { id } = useParams();

    return (
        <div>
            <Details id={Number(id)} />
        </div>
    );
};

export default ShowMerchant;
