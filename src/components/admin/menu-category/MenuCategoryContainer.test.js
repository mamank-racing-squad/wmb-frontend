import {shallow} from 'enzyme'
import MenuCategoryContainer from "./MenuCategoryContainer";
import React from "react";


describe('MenuCategoryContainer Test', function () {
    let menuCategoryContainer = shallow(<MenuCategoryContainer/>);
    describe('render', function () {
        it('should have one div', function () {
            expect(menuCategoryContainer.find('div')).toHaveLength(1)
        });
    });
});