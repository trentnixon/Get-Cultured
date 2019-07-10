import React from 'react';
import {GA} from "../../../actions/ga";

const PartnerZone = props => (
  <div className="PartnerZone">
        <a href={props.PartnerZone.PartnerZoneURL}
            onClick={ () =>{GA('Link Clicked', 'Header - PartnerZone', props.PartnerZone.PartnerZoneURL)}}
        >
            {props.PartnerZone.PartnerZoneHeader}
        </a>
    </div>
);

export default PartnerZone;