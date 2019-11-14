import React from "react";
import {getTrxById} from "./PaymentService";
import {fetchingOrderDetailSuccess} from "./PaymentAction";
import {connect} from "react-redux";
class Receipt extends React.Component{
    render() {
       const idOrder = this.props.match.params.id;
       console.log(this.props);
        return(
            <div>
                <h5><i>Warung Makan Bahari</i></h5>
                <table>
                    <tr>
                        <td style={{"text-align":"left"}}>PIC Name </td>
                        <td style={{"text-align":"right"}}>{this.props.receipt.costumerName}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Jumlah Costumer</td>
                        <td style={{"text-align":"right"}}>{this.props.receipt.totalCostumer}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Dipesan Pada</td>
                        <td style={{"text-align":"right"}}>{this.props.receipt.createAt}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Pembayaran</td>
                        <td style={{"text-align":"right"}}>{this.props.receipt.payment}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Kembalian</td>
                        <td style={{"text-align":"right"}}>{this.props.receipt.change}</td>
                    </tr>
                </table>
                ======= DETAIL TRANSAKSI =======
                {/*<p>nomor meja : {this.props.receipt.diningTable.idDiningTable}</p>*/}
                {/*<p>{this.props.receipt.orderDetails.map(element=>{*/}
                {/*    return element.menuName*/}
                {/*})}</p>*/}
            </div>
        )
    }
    componentDidMount() {
        this.fetchDataOrder();
    }

    fetchDataOrder = async () => {
        const data = await getTrxById(this.props.match.params.id);
        if (!(data === undefined)) {
            this.props.dispatch({...fetchingOrderDetailSuccess, payload: data})
        }
    };
}
const mapStateToProps = (state) => {
    return {...state.paymentReducer}
};

export default connect(mapStateToProps)(Receipt)