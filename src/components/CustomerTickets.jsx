import React, {use} from 'react';

const CustomerTickets = ({cardsPromise,setQueryTasks}) => {
    const cards = use(cardsPromise);

    return (

        
        <div className='grid grid-cols-2 gap-4'>
            {
                cards.map(card => (
                    <div key={card.id} className="card bg-base-100 w-120 shadow-xl">
                    <div className="card-body px-6 py-3 rounded-md">
                        <div className='flex justify-between my-2'>
                            <div><h2 className='text-xl font-bold'>{card.issue_name}</h2></div>
                            <div className={`py-2 px-3 rounded-2xl ${card.status === 'open'? 'bg-green-300': 'bg-yellow-200'}`}>{card.status}</div>
                        </div>
                        <p><button onClick={() => setQueryTasks(prev => [...prev, card])}>{card.short_details}</button></p>
                        <div className='flex justify-between items-center mt-3'>
                            <div>{card.id} <span className='ml-2 text-red-600'> {card.priority} Priority</span>  </div>
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