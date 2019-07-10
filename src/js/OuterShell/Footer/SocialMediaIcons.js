import React from 'react';
import TrackVisibility from 'react-on-screen';
import GlabsContainer from "../Body/InnerContainer";
import ShareOptions from "./Components/SocialContainer";
//import ClientDetails from "../Header/ClientDetails";

/*
<TrackVisibility>
                        <ClientDetails Client={props.UI.Client} />
                    </TrackVisibility>
*/
function Footer(props){
    //console.log(props)
    return(
        <div id="SocialMediaIcons" className="SocialMediaIcons" >
                <GlabsContainer>
                    <TrackVisibility> 
                        <ShareOptions {... props} />
                    </TrackVisibility>  
                </GlabsContainer>
        </div>
    )
}
export default Footer;