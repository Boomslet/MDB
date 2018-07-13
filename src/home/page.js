import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import "./page.css";

var mobile = window.matchMedia("only screen and (max-width: 499px)").matches

export default class HomePage extends React.Component {
  render() {
    return (
      <div className='HomePage'>

        {/* SPLASH HEADER */}
        <div className='header'>
          <Avatar
            alt='MDB'
            className='avatar'
            src={require('../static/jpg/selfie5.jpg')}
          />
        </div>

        {/* ABOUT ME */}
        <div className='about-me'>
          <Typography classes={{ root: 'aboutme-text' }}>
            I am a Full Stack Web Developer and UI/UX Designer based in Perth, Australia.<br />
            I have a passion for creating intuitive and responsive digital experiences.
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
              classes={{ title: 'project-text', subheader: 'project-subtext' }}
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
                classes={{ root: 'project-text-small' }}
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
              classes={{ title: 'project-text', subheader: 'project-subtext' }}
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
                classes={{ root: 'project-text-small' }}
                gutterBottom
              >
                Project Frameworks
              </Typography>
              <Typography classes={{ root: 'subheading' }}>
                React Native<br />
                React Router Native<br />
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
                <Avatar className='lt-avatar' src={require('../static/jpg/lt3.png')} />
              }
              classes={{ title: 'project-text', subheader: 'project-subtext' }}
              title='lifetab 3.0'
              subheader='Front End Developer & UI/UX Designer'
            />
            <CardMedia
              classes={{ root: 'card-image-lifetab' }}
              // image={require('../static/jpg/lt2.png')}
              title="lifetab 3.0"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-text-small' }}
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

            {mobile &&
              <div className='svg-div'>
                <IconButton
                  className='svg-button'
                  href='https://www.facebook.com/mark.boon.96'
                  target='_blank'
                >
                  <SvgIcon className='svg'>
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </SvgIcon>
                </IconButton>

                <IconButton
                  className='svg-button'
                  href='https://github.com/Boomslet'
                  target='_blank'
                >
                  <SvgIcon className='svg'>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </SvgIcon>
                </IconButton>

                <IconButton
                  className='svg-button'
                  href='https://www.linkedin.com/in/mark-boon-17068b157/'
                  target='_blank'
                >
                  <SvgIcon className='svg'>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </SvgIcon>
                </IconButton>
              </div>
            }
          </div>

          <Typography classes={{ root: 'contact-text-tiny' }}>
            2018 - SOMEWHERE IN WESTERN AUSTRALIA
          </Typography>
        </div>

      </div >
    )
  }
}
