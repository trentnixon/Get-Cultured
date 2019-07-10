import React from 'react';
// Dialog Components
import Stepper from "./stepper";
import Dialog from '@material-ui/core/Dialog'; 
import IconButton from '@material-ui/core/IconButton'; 
import Grow from '@material-ui/core/Grow';
import Icon from '@material-ui/core/Icon';

// Application Settings
import {SetUIActive} from "../actions/actions";
import {GA} from "../../../../actions/ga";



function Transition(props) { 
  return <Grow direction="down" {...props} />;
}

export default class FullScreenDialog extends React.Component { 
  state = { open: false, }; 

  componentWillMount(){}

  handleClickOpen = () => {
    SetUIActive(this.props.count)
    GA("Grid Item Opened", "Click",this.props.Item.Title)
    this.setState({ open: true });
  };
  
  handleClose = () => {
    this.setState({ open: false });
    GA("Grid Item Closed", "Click", this.props.Item.Title)
  }; 
 
  render() {
  // console.log(this.props) 
 
  // <h4>{this.props.Item.Meta1} | {this.props.Item.Meta2}</h4>
    return (
  
      <div className="CardCTA"> 
          <a  
            onClick={this.handleClickOpen}  
            className="GridItemCTA" 
            style={
                {
                  height:this.props.height,
                  backgroundImage: "url( " +this.props.CDN + this.props.Folder + this.props.Item.Thumb + ")"
                
              }}

          >
            <div className="ActionBar">
              <div className="iconLabel"> 
                  <h2>{this.props.Item.Title}</h2>
                 
              </div> 
            </div>
          </a>

          <Dialog 
            fullScreen  
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            className="Dialog"
            scroll="body"
          >
            <div>
              <IconButton color="inherit" className="CloseCard" onClick={this.handleClose} aria-label="Close">
                <Icon> close </Icon>
              </IconButton>
              
              <Stepper 
                int={this.props.count}
                {... this.props}
              />
            </div>
          </Dialog>
      </div>
    );
  }
}
