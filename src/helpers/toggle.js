import { Component } from 'react';
import { SlUserFollow, SlArrowUp } from 'react-icons/sl';
import { IconContext } from 'react-icons';
import { BtnIcon } from './toggle.style';
const styleIcon = {
//   color: '#6495ed',
};
export class Toggle extends Component {
  state = { isOpen: false };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <>
        <IconContext.Provider value={{ size: '25px' }}>
          <div>
            <BtnIcon onClick={this.toggle}>
              {isOpen ? (
                <SlArrowUp style={styleIcon} />
              ) : (
                <SlUserFollow style={styleIcon} />
              )}
            </BtnIcon>
            {isOpen && children}
          </div>
        </IconContext.Provider>
      </>
    );
  }
}
