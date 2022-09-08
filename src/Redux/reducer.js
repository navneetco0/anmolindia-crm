import { ADD_CONTACTS, ADD_REQUIREMENTS, ALL_CONTACTS, COMMODITY, DESTINATION, DISTRICT, EMAIL, FROM, INDUSTRY, LANDLINE, NAME, PHONE, QUANTITY, REMOVE_CONTACT, STATE, TYPE } from "./action";

const initial = {
   Name:'', 
   Type:'',
   Phone:'',
   email:'',
   Landline:'',
   State:'',
   District:'',
   Commodity:'',
   From:'',
   Industry:'',
   Destination:'',
   Quantity:'',
   Contacts:[],
   requirements:[],
   allContacts:[],
}

export const mainReducer = (store=initial, {type, payload})=>{
    switch(type){
        case NAME:
            return {...store, Name:payload}
        case TYPE:
            return {...store, Type:payload}
        case PHONE:
            return {...store, Phone:payload}
        case EMAIL:
            return {...store, email:payload}
        case LANDLINE:
            return {...store, Landline:payload}
        case STATE:
            return {...store, State:payload}
        case DISTRICT:
            return {...store, District:payload}
        case COMMODITY:
            return {...store, Commodity:payload}
        case FROM:
            return {...store, From:payload}
        case INDUSTRY:
            return {...store, Industry:payload}
        case DESTINATION:
            return {...store, Destination:payload}
        case QUANTITY:
            return {...store, Quantity:payload}
        case ADD_CONTACTS:
            return {...store, Contacts:[...store.Contacts, payload]}
        case REMOVE_CONTACT:
            return {...store, Contacts:store.Contacts.filter((Element)=>Element!==payload)}
        case ADD_REQUIREMENTS:
            return {...store, requirements:[...store.requirements, payload]}
        case ALL_CONTACTS:
            return {...store, allContacts:payload}
        default:
            return store;
    }
}