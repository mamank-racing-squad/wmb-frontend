import React from "react";
import {getPaymentById} from "../../../services/PaymentService";
import {fetchingPaymentSuccess} from "../../../actions/PaymentAction";
import {connect} from "react-redux";
import {handleNumberFormatCurrency} from "../../../constants/Constanta";
class Receipt extends React.Component{
    render() {
        const orderDetails = this.props.orderDetails.map((element)=>{
            return <tr>
                <td style={{"text-align":"left"}}>{element.menu.menuName}</td>
                <td style={{"text-align":"right"}}>{element.amount}</td>
                <td style={{"text-align":"right"}}>Rp. {handleNumberFormatCurrency(element.subTotalPrice)}</td>
            </tr>
        });
       return(
            <div>
                <table style={{"width":"35%"}} >
                    <tbody>
                    <tr style={{"text-align":"center"}}><h5><i>Warung Makan Bahari</i></h5></tr>
                    <tr style={{"text-align":"center"}}><p><i>Jl. H. Dahlan No.75</i></p></tr>
                    </tbody>

                </table>
                <table style={{"width":"35%"}} >
                    <tbody>
                    <tr>
                        <td style={{"text-align":"left"}} width="40%">PIC Name </td>
                        <td style={{"text-align":"right"}} colSpan="2">{this.props.receipt.costumerName}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Jumlah Costumer</td>
                        <td style={{"text-align":"right"}} colSpan="2">{this.props.receipt.totalCostumer}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Dipesan Pada</td>
                        <td style={{"text-align":"right"}} colSpan="2">{this.props.receipt.createAt}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Nomor Meja</td>
                        <td style={{"text-align":"right"}} colSpan="2">{this.props.diningTable.numberDiningTable}</td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                    ========== DETAIL TRANSAKSI ==========
                <br/>
                <br/>
                <table style={{"width":"35%"}}>
                    <tbody>
                    {orderDetails}
                    </tbody>
                </table>
                <br/>
                    =================================
                <br/><br/>
                <table style={{"width":"35%"}} >
                    <tbody>
                    <tr>
                        <td style={{"text-align":"left"}}><b>Total</b></td>
                        <td style={{"text-align":"right"}} colSpan="2"><b>Rp. {handleNumberFormatCurrency(this.props.receipt.totalPrice)}</b></td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Pembayaran</td>
                        <td style={{"text-align":"right"}} colSpan="2">Rp. {handleNumberFormatCurrency(this.props.receipt.payment)}</td>
                    </tr>
                    <tr>
                        <td style={{"text-align":"left"}}>Kembalian</td>
                        <td style={{"text-align":"right"}} colSpan="2">Rp. {handleNumberFormatCurrency(this.props.receipt.change)}</td>
                    </tr>
                    </tbody>
                </table>
                <br/><br/>
                <table style={{"width":"35%"}}>
                    <tbody>
                    <tr style={{"text-align":"center"}}><i>Terimakasih Telah Berkunjung</i></tr>
                    <tr style={{"text-align":"center"}}><i>Jika tidak puas, laporlah kepada kami</i></tr>
                    <tr style={{"text-align":"center"}}><i>Jika puas, Sebarkanlah kepuasan anda kepada teman-teman!</i></tr>
                    </tbody>
                </table>
            </div>
        )
    }
    componentDidMount() {
        this.fetchDataPayment();
    }

    fetchDataPayment = async () => {
        const data = await getPaymentById(this.props.match.params.id);
        if (!(data === undefined)) {
            this.props.dispatch({...fetchingPaymentSuccess, payload: data})
        }
    };
}
const mapStateToProps = (state) => {
    return {...state.paymentReducer}
};

export default connect(mapStateToProps)(Receipt)