import React from "react";
import Avatar from '@material-ui/core/Avatar';
import "./page.css";
import Typography from "@material-ui/core/Typography";

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
        <div className='header'>
          <Avatar
            alt='MDB'
            className='avatar'
            src={require('../static/selfie3.jpg')}
          />
        </div>
        <div className='aboutme'>
          <Typography
            classes={{
              root: 'aboutme-wrapper'
            }}
          >
            I am a Full Stack Web Developer and UI/UX designer based in Perth, Australia.<br/>
            I have a passion for creating intuitive and responsive user experiences.
          </Typography>
        </div>
      </div >
    )
  }
}
