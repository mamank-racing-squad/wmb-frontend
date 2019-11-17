import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {DiningTableToPaid} from './DiningTableToPaid'

let component

beforeEach(() => {
    component = shallow(<DiningTableToPaid/>)
})

describe('CashierContainer Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 3 div in AdminContainer Component ', () => {
        expect(component.find("div")).toHaveLength(2)
    })

    it('should have 6 Span in AdminContainer Component ', () => {
        expect(component.find("span")).toHaveLength(2)
    })
    it('should have 6 Span in AdminContainer Component ', () => {
        expect(component.find("img")).toHaveLength(1)
    })
})