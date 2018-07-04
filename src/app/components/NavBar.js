import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppBar
          position="fixed"
        >
          <Toolbar className="NavBar">
            <NavLink to="/">
              <Typography variant="title"
                classes={{
                  root: "navlink"
                }}
              >
                LOGO
              </Typography>
            </NavLink>
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
