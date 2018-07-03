import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./page.css";

const styles = ({
  info: {
    fontSize: '1.6rem',
    lineHeight: '1.765',
    letterSpacing: '.15rem',
    fontWeight: '300',
    color: '#0574bc',
    textAlign: 'center',
  },
});

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='HomePage'>
        <div className='wrapper'>
          <Avatar 
            alt='MDB'
            className='avatar'
            src={require('../static/selfie.jpg')}
          />
        </div>
      </div >
    )
  }
}
