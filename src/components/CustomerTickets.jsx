import React, {use} from 'react';

const CustomerTickets = ({cardsPromise}) => {
    const cards = use(cardsPromise);
    console.log(cards);

    return (

        
        <div className='grid grid-cols-2 gap-4'>
            {
                cards.map(card => (
                    <div key={card.id} className="card bg-base-100 w-120 shadow-xl">
                    <div className="card-body px-6 py-3">
                        <div className='flex justify-between my-2'>
                            <div><h2 className='text-xl font-bold'>{card.issue_name}</h2></div>
                            <div>{card.status}</div>
                        </div>
                        <p>{card.short_details}</p>
                        <div className='flex justify-between items-center mt-3'>
                            <div>{card.id} <span className='ml-2'> </span>  {card.priority} Priority</div>
                            <div className='flex gap-3'>
                                <p>{card.customer_name}</p>
                                <p>{card.issue_posted_date}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CustomerTickets;