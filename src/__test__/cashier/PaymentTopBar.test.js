
import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import PaymentTopBar from "../../components/cashier/payment/PaymentTopBar";

let component

beforeEach(() => {
    component = shallow(<PaymentTopBar/>)
})

describe('Payment Topbar Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 1 div in PaymentTopBar Component ', () => {
        expect(component.find("div")).toHaveLength(1)
    })
    it('should have 1 span in PaymentTopBar Component', () => {
        expect(component.find("span")).toHaveLength(1)
    })
})