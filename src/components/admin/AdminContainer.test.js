import React from 'react'
import {shallow, mount, render} from 'enzyme'
import {AdminContainer} from './AdminContainer'

let component

beforeEach(() => {
    component = shallow(<AdminContainer/>)
})

describe('AdminContainer Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 3 div in AdminContainer Component ', () => {
        expect(component.find("div")).toHaveLength(3)
    })
    it('should have 5 Navlink in AdminContainer Component ', () => {
        expect(component.find("NavLink")).toHaveLength(5)
    })
    it('should have 1 Topbar in AdminContainer Component ', () => {
        expect(component.find("Topbar")).toHaveLength(1)
    })
    it('should have 6 Span in AdminContainer Component ', () => {
        expect(component.find("span")).toHaveLength(6)
    })
    it('should have 6 Span in AdminContainer Component ', () => {
        expect(component.find("span")).toHaveLength(6)
    })
    it('should have name classname Nav in Div Component adminContainer', () => {
        expect(component.find(".Nav").length).toBe(1)
    });
})