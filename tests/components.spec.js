import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Profile from '../src/Profile';

describe('Profile', () => {
  let shopProfile;
  let ProfileWrapper;

  beforeEach('Create a new <Profile /> component', () => {
    shopProfile = {
      name: 'Hungry Ghost',
      description: 'Cozy coffee shop featuring a rustic, woody asthetic and west-coast Stumptown coffee',
      location: 'Flatbush Ave.',
      outlets: false,
      tableCount: 3
    }

    ProfileWrapper = shallow(<Profile profile={ shopProfile } />);
  });

  it('has the name of the coffee shop in the header', () => {
    expect(ProfileWrapper.find('h1')).to.have.html('<h1>Profile for Hungry Ghost</h1>');
  });

  it('includes the location in a p tag under the header', () => {
    expect(ProfileWrapper.find('p')).to.have.html('<p>Flatbush Ave.</p>');
  });

  it('includes the description in a div', () => {
    expect(ProfileWrapper.find('.description')).to.have.html('<div className="description">Cozy coffee shop featuring a rustic, woody asthetic and west-coast Stumptown coffee</div>')
  });

  it('changes information if a different shop is passed in as a prop', () => {
    shopProfile = {
      name: 'Gorilla Coffee',
      description: 'Small but calm, their coffee is pricey',
      location: 'Just off of Flatbush Ave.',
      outlets: false,
      tableCount: 9
    }

    ProfileWrapper = shallow(<Profile profile={shopProfile}/>);

    expect(ProfileWrapper.find('h1')).to.have.html('<h1>Profile for Gorilla Coffee</h1>');
    expect(ProfileWrapper.find('p')).to.have.html('<p>Just off of Flatbush Ave.</p>');
    expect(ProfileWrapper.find('.description')).to.have.html('<div className="description">Small but calm, their coffee is pricey</div>');
  })
})









