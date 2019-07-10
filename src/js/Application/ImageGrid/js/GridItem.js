import React from 'react';
import Dialog from "./Card";
import { Animated } from "react-animated-css";
//import Count from "./Count";
// <Count  int={this.props.count} include={this.props.UI.UI.Count} />



let ActiveItem=null; 
export default class Grid extends React.Component { 
  state = { expanded: false, height:0 };
 
 componentWillMount(){} 

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let divWidth = document.getElementsByClassName("GridItem")[0].clientWidth;
    this.setState({height: divWidth});
}
  
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
     //console.log(this.props.APP.UI_SET_ACTIVE_FACE)
    if(this.props.APP.UI_SET_ACTIVE_FACE === this.props.count){
      ActiveItem="ActiveItem"
    }
    else{
      ActiveItem="" 
    }
    
    // const { classes } = this.props; 
    return (
      <div className={"nopadding GridItem " + ActiveItem }  >
        <Animated animationIn="zoomIn"  animationOut="fadeInUp" animationInDelay={this.props.delay} isVisible={true}>
          <div className="ItemOuter">
            <Dialog    
              Data={this.props.Item} 
              height={this.state.height }
              {... this.props}
            /> 
          </div>
        </Animated>
        
      </div>
    );
  }
}