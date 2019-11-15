
import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Topbar from "../Topbar";
import AmountControl from "../order/AmountControl";

let component

beforeEach(() => {
    component = shallow(<AmountControl/>)
})

describe('AmountControl Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 2 div in AmountControl Component ', () => {
        expect(component.find("div")).toHaveLength(2)
    })
    it('should have 1 span in AmountControl Component ', () => {
        expect(component.find("span")).toHaveLength(1)
    })
})