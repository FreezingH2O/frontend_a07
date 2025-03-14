
import Image from "next/image";

export default function VenueDetail({params}: {params:{vid:string}}){

const mockVenue = new Map();
mockVenue.set('001',  {venueName: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg"});
mockVenue.set('002', {venueName: "Spark Space", imgSrc: "/img/sparkspace.jpg"});
mockVenue.set('003',  {venueName: "The Grand Table", imgSrc: "/img/grandtable.jpg"});




    return(
        <div className="text-center p-5">
            <h1 className="text-lg">Venue ID : {params.vid}</h1>
            <div className="flex flex-row my-5">
                <Image src={mockVenue.get(params.vid).imgSrc}
                alt= 'veneu img'
                width={0} height={0} sizes ='100vw'
                className = 'rounded-lg w-[30%]'/>
                <div className="text-md mx-5">{mockVenue.get(params.vid).venueName}</div>

            </div>
            
        </div>
    )
}