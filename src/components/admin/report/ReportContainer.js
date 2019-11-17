import React from "react";
import {connect} from "react-redux";
import {handleNumberFormatCurrency} from "../../../constants/Constanta";
import {getPayments, getTotalIncome} from "../../../services/ReportService";
import {getOrderById} from "../../../services/OrderService";

class ReportContainer extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">PIC Name</th>
                        <th scope="col">Total Costumer</th>
                        <th scope="col">Order At</th>
                        <th scope="col">Paid At</th>
                        <th scope="col">Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.reports.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.order.costumerName}</td>
                                    <td>{element.order.totalCostumer}</td>
                                    <td>{element.order.createAt.replace(/T/, " ")}</td>
                                    <td>{element.paidAt.replace(/T/, " ")}</td>
                                    <td>Rp. {handleNumberFormatCurrency(element.order.totalPrice)}</td>
                                </tr>
                            )})
                    }
                    <tr></tr>
                    <tr key="total">
                        <td colSpan={5}><b>Total Income</b></td>
                        <td><b>Rp. {handleNumberFormatCurrency(this.props.totalIncome)},-</b></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    async componentDidMount() {
        this.fetchDataReport();
        await this.fetchTotalIncome()
    }

    fetchDataReport = async () => {
        const data = await getPayments();
        if (!(data === undefined)) {
            this.props.dispatch({type:'FETCHING_PAYMENTS_SUCCESS', payload: data})
        }
    };
    fetchTotalIncome = async () => {
        const data = await getTotalIncome();
        if (!(data === undefined)) {
            this.props.dispatch({type:'FETCHING_TOTAL_INCOME_SUCCESS', payload: data})
        }
    };

}

const mapStateToProps = (state) => {
    return {...state.reportReducer}
};

export default connect(mapStateToProps)(ReportContainer);