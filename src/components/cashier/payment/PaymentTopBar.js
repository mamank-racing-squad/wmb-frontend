import React from 'react';
import '../../../assets/css/Topbar.scss';

class PaymentTopBar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <span style={{fontSize:"24px"}} className="title">Payment</span>
            </div>
        )
    }
}
export default PaymentTopBar;