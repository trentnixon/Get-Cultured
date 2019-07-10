import React from 'react';
import {GA} from "../../../../actions/ga";

// Component Documentation 
// https://www.npmjs.com/package/react-share
import {
    FacebookShareButton,FacebookIcon,
    TwitterShareButton,TwitterIcon, 
    EmailShareButton,EmailIcon,
    LinkedinShareButton,LinkedinIcon,
    WhatsappShareButton,WhatsappIcon,
   
  } from 'react-share';

// RedditShareButton,RedditIcon,
// WorkplaceShareButton,WorkplaceIcon
  
const SocialIcons=[
      {
        Name:"Facebook",
        Button:FacebookShareButton,
        Icon:FacebookIcon,
    },
    {
        Name:"Twitter",
        Button:TwitterShareButton,
        Icon:TwitterIcon,
    },
    {
        Name:"Linkden",
        Button:LinkedinShareButton,
        Icon:LinkedinIcon,
    },{
        Name:"Whatsapp",
        Button:WhatsappShareButton,
        Icon:WhatsappIcon,
    },{
        Name:"Email",
        Button:EmailShareButton,
        Icon:EmailIcon,
    },
]

/**
 * ,{
        Name:"Workpalce",
        Button:WorkplaceShareButton,
        Icon:WorkplaceIcon,
    },{
        Name:"Reddit",
        Button:RedditShareButton,
        Icon:RedditIcon,
    }
 */

let shareUrl=null, title=null, iconSize=40, Visable="hide";
export default class SocialBar extends React.Component {

    componentWillMount(){ 
        shareUrl = window.location.href; 
        title = this.props.UI.Header.Header + ' ' + this.props.UI.Header.SubHeader;
    }  

  render() {
      if(this.props.isVisible === true){Visable="show"} else{Visable="hide"}
    return(
        <div id="ShareMe" className={Visable}>
        <h3>Share</h3> 
        <ul className="ShareButtons">
                {
                    SocialIcons.map((icon,i)=>{
                        return(
                                <li key={i}  className={icon.Name} onClick={()=>{GA('Social Media Button Clicked',icon.Name , shareUrl)} }>
                                    <icon.Button
                                        url={shareUrl} 
                                        quote={title}
                                        title={title}
                                        className="Share-button"
                                    >
                                        <icon.Icon
                                            size={iconSize}
                                            round 
                                        />
                                    </icon.Button> 
                                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
  }
}
