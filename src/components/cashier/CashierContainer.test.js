import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {CashierContainer} from './CashierContainer'

let component

beforeEach(() => {
    component = shallow(<CashierContainer/>)
})

describe('CashierContainer Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 3 div in CashierContainer Component ', () => {
        expect(component.find("div")).toHaveLength(4)
    })
    it('should have 5 Navlink in CashierContainer Component ', () => {
        expect(component.find("NavLink")).toHaveLength(4)
    })
    it('should have 1 Topbar in CashierContainer Component ', () => {
        expect(component.find("Topbar")).toHaveLength(1)
    })
    it('should have 6 Span in CashierContainer Component ', () => {
        expect(component.find("span")).toHaveLength(5)
    })
})