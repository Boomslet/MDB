import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SvgIcon from '@material-ui/core/SvgIcon';

import "./NavBar.css";

class NavBar extends React.Component {

  handleScroll = element => {
    document.querySelector(element).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
        >
          <Toolbar className="NavBar">

            <div className='navigation'>
              <Button
                classes={{
                  root: 'button'
                }}
                disableRipple
                onClick={() => this.handleScroll('.avatar')}
              >
                <Typography variant="title"
                  classes={{
                    root: "nav-text"
                  }}
                >
                  LOGO
                </Typography>
              </Button>

              <Button
                classes={{ root: 'button' }}
                disableRipple
                onClick={() => this.handleScroll('.aboutme-text')}
              >
                <Typography variant="title"
                  classes={{
                    root: "nav-text"
                  }}
                >
                  ABOUT ME
                </Typography>
              </Button>

              <Button
                classes={{ root: 'button' }}
                disableRipple
                onClick={() => this.handleScroll('.card')}
              >
                <Typography
                  classes={{ root: "nav-text" }}
                  variant="title"
                >
                  PROJECTS
                </Typography>
              </Button>

              <Typography variant="title"
                classes={{
                  root: "nav-text"
                }}
              >
                CONTACT
              </Typography>
            </div>

            <div>
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
                href='https://www.facebook.com/mark.boon.96'
                target='_blank' 
              >
                <SvgIcon className='svg'>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
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

          </Toolbar>
        </AppBar>
      </React.Fragment>
    )
  };
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
