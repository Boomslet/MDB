import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import "./page.css";


export default class HomePage extends React.Component {
  render() {
    return (
      <div className='HomePage'>

        {/* SPLASH HEADER */}
        <div className='header'>

          <Avatar
            alt='MDB'
            className='avatar'
            src={require('../static/jpg/selfie4.jpg')}
          />
        </div>

        {/* ABOUT ME */}
        <div className='about-me'>
          <Typography classes={{ root: 'aboutme-text' }}>
            I am a Full Stack Web Developer and UI/UX Designer based in Perth, Australia.<br />
            I have a passion for creating intuitive and responsive user experiences.
          </Typography>
        </div>

        {/* PROJECTS */}
        <div className='projects'>
          <Card
            classes={{ root: 'card' }}
            raised
          >
            <CardHeader
              avatar={
                <Avatar className='crypto-avatar' src={require('../static/jpg/4 White.png')} />
              }
              classes={{ title: 'project-text' }}
              title='CryptoLottery'
              subheader='Founder & Full Stack Developer'
            />

            <CardMedia
              classes={{ root: 'card-image-crypto' }}
              //image={require('../static/jpg/4 Blue.png')}
              title="CryptoLottery"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-subtext' }}
                gutterBottom
              >
                Project Frameworks
              </Typography>

              <div className='frameworks'>
                <Typography
                  classes={{ root: 'subheading' }}
                >
                  React<br />
                  React Router <br />
                  Redux
                </Typography>
                <Typography
                  classes={{ root: 'subheading' }}
                >
                  Django<br />
                  Django REST Framework
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            classes={{ root: 'card' }}
            raised
          >
            <CardHeader
              avatar={
                <Avatar className='cal-avatar' src={require('../static/jpg/cal.png')} />
              }
              classes={{ title: 'project-text' }}
              title='Calendar App'
              subheader='Co-Founder & Android / iOS Developer'
            />
            <CardMedia
              classes={{ root: 'card-image-calendar' }}
              // image={require('../static/jpg/fc.png')}
              title="Frictionless Calendar"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-subtext' }}
                gutterBottom
              >
                Project Frameworks
              </Typography>
              <Typography classes={{ root: 'subheading' }}>
                React Native<br />
                Redux
              </Typography>
            </CardContent>
          </Card>

          <Card
            classes={{ root: 'card' }}
            raised
          >
            <CardHeader
              avatar={
                <Avatar className='lt-avatar' src={require('../static/jpg/lt2.png')} />
              }
              classes={{ title: 'project-text' }}
              title='lifetab 3.0'
              subheader='Front End Developer & UI/UX Designer'
            />
            <CardMedia
              classes={{ root: 'card-image-lifetab' }}
              image={require('../static/jpg/lt2.png')}
              title="lifetab 3.0"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-subtext' }}
                gutterBottom
              >
                Project Frameworks
              </Typography>

              <Typography classes={{ root: 'subheading' }}>
                React<br />
                React Router<br />
                Redux
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* CONTACT DETAILS */}
        <div className='contact'>

          <div className='contact-wrapper'>
            <Typography classes={{ root: 'contact-text-small' }}>
              GET IN TOUCH
            </Typography>

            <Typography classes={{ root: 'contact-text-large' }}>
              boon.webdevelopment@gmail.com
            </Typography>
          </div>

          <Typography classes={{ root: 'contact-text-tiny' }}>
            2018 - SOMEWHERE IN WESTERN AUSTRALIA
          </Typography>
        </div>

      </div >
    )
  }
}
