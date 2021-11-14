import React from 'react';
import Navigation from '../../Sharedpage/Navigation/Navigation';
import AvailableOrders from '../AvailableOrders/AvailableOrders';
import OrderHeader from '../OrderHeader/OrderHeader';

const Order = () => {
    const [date, setDate] = React.useState(new Date());
    return (

        <div>
            <Navigation></Navigation>
            {/* <OrderHeader
                date={date}
                setDate={setDate} >


            </OrderHeader> */}
            <AvailableOrders date={date}></AvailableOrders>

        </div>
    );
};

export default Order;