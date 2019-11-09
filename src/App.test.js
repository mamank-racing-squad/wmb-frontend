import React from 'react';

import {shallow} from 'enzyme';
import App from './App'
describe("App Testing", () => {
  describe('render',()=>{
    it("should have 1 Div App Container", () => {
      const AppContainer = shallow(<App/>)
      expect(AppContainer.find('Container')).toHaveLength(1)
    })

    it("should have 2 Button Component in App Container", () => {
      const AppContainer = shallow(<App/>)
      expect(AppContainer.find('Container').children("Button"))//zain
    })
  })
});

