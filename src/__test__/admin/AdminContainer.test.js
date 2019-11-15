
import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Topbar from "../../components/admin/Topbar";
import {AdminContainer} from "../../components/admin/AdminContainer";

let component

beforeEach(() => {
    component = shallow(<AdminContainer dispatch={mockDispatch} />)
})

describe('Topbar Component', () => {

    let mockDispacth = jest.fn()

    it('shouldnt explode', () => {
        expect(component.exists()).toBeTruthy()
    })

    it('should call dispatch when perform click ', () => {
        let adminContainer = shallow(<AdminContainer dispatch={mockDispacth}/>)
        adminContainer.find("button").first.simulate("click")
        expect(adminContainer.instance.props.dispatch.mock.call.length).toBe(1)
    })
})