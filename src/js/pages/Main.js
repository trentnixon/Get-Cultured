import React  from 'react';
// Import Layout Components
import OuterShell from "../OuterShell/OuterShell";
import GlabsContainer from "../OuterShell/Body/InnerContainer"
// Application
import Application from "../Application/ImageGrid/ImageGrid";

function Main(props){
  //console.log(props)
  return(
        <OuterShell  {... props} >
          <GlabsContainer>
            <Application APP={props.APP} CDN={props.CDN}/>
          </GlabsContainer>
        </OuterShell>
      )
  }

export default Main; 