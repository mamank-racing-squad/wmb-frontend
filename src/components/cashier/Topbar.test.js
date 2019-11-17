
import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Topbar from "./Topbar";

let component

beforeEach(() => {
    component = shallow(<Topbar/>)
})

describe('Topbar Component', () => {

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should have 2 div in Topbar Component ', () => {
        expect(component.find("div")).toHaveLength(1)
    })
})