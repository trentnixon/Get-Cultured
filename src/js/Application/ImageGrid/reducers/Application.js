// import React from "react";

const InitialState ={
	APPLICATION:false,
	GA_DB:false,
	GA_SCHEMA:false,
	UI_SET_ACTIVE_FACE:false,
	DisplayCategory:'false' 

}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			case "STORE_INTERACTIVE":{
			return {...state, APPLICATION:action.payload} 
				// eslint-disable-next-line 
				break
			}

			case "STORE_GA_APPLICATION":{
				return {...state, GA_DB:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_GA_SCHEMA":{
				return {...state, GA_SCHEMA:action.payload}
					// eslint-disable-next-line 
					break
			}
			case "STORE_APPLICATION":{
				return {...state, APPLICATION:action.payload}
					// eslint-disable-next-line 
					break
				}
				
			case "UI_SET_ACTIVE_FACE":{
				return {...state, UI_SET_ACTIVE_FACE:action.payload}
					// eslint-disable-next-line 
					break
				}
			case "UI_SELECT_CATEGORY":{
					return {...state, DisplayCategory:action.payload}
						// eslint-disable-next-line 
						break
				}
		}
		return state;
	}
export default APP;	