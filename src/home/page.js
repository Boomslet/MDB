import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
            <CardMedia
              classes={{ root: 'card-image-lifetab' }}
              image={require('../static/jpg/lt2.png')}
              title="CryptoLottery"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-text' }}
                gutterBottom
                variant='title'
              >
                CryptoLottery
              </Typography>
              <Typography>
                Founder & Full Stack Developer.
              </Typography>
            </CardContent>
          </Card>

          <Card
            classes={{ root: 'card' }}
            raised
          >
            <CardMedia
              classes={{ root: 'card-image-calendar' }}
              image={require('../static/jpg/fc.png')}
              title="Frictionless Calendar"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-text' }}
                gutterBottom
                variant='title'
              >
                Frictionless Calendar
              </Typography>
              <Typography>
                Co-Founder & iOS / Android Developer.
              </Typography>
            </CardContent>
          </Card>

          <Card
            classes={{ root: 'card' }}
            raised
          >
            <CardMedia
              classes={{ root: 'card-image-lifetab' }}
              image={require('../static/jpg/lt2.png')}
              title="lifetab 3.0"
            />
            <CardContent>
              <Typography
                classes={{ root: 'project-text' }}
                gutterBottom
                variant='title'
              >
                Lifetab 3.0
              </Typography>
              <Typography>
                Lead Front End Developer.
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className='contact'>
        </div>

      </div >
    )
  }
}
