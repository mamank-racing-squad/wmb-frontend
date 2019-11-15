import {shallow} from 'enzyme'
import MenuCategoryContainer from "./MenuCategoryContainer";
import React from "react";


describe('MenuCategoryContainer Test', function () {
    let menuCategoryContainer = shallow(<MenuCategoryContainer/>);
    let mockDispatch = jest.fn()
    describe('render', function () {
        it('should have one div', function () {
            expect(menuCategoryContainer.find('div')).toHaveLength(1)
        });
        it('should call dispatch when perform click', ()=> {
            let menuCategoryContainer = shallow(<MenuCategoryContainer dispatch={mockDispatch}/>)
            menuCategoryContainer.find('button').first().simulate('click')
            expect(menuCategoryContainer.instance().props.dispatch.mock.calls.length).toBe(1)
        });
    });
});