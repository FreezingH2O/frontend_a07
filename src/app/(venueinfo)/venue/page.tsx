import CardPanel from '@/components/CardPanel';

export default function Venue(){
    return (
        <div>
            <CardPanel/>
        </div>

    );
}

export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'}]
}