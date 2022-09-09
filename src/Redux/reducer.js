import { ADD_CONTACTS, ADD_REQUIREMENTS, ALL_CONTACTS, ALL_TRASHES, MANAGE_CONTACT_STATUS, REMOVE_CONTACT, RES_CONTACTS, RES_DUPLICATES, RES_TRASHES, SET_EDIT, SET_FORM } from "./action";

const initial = {
   manage_contact_status:'all_contacts',
   Contacts:[],
   requirements:[],
   allContacts:[],
   allTrashes:[],
   Edit:false,
   ResContacts:[],
   ResTrashes:[],
   ResDuplicates:[],
   formData:[],
}

export const mainReducer = (store=initial, {type, payload})=>{
    switch(type){
        case MANAGE_CONTACT_STATUS:
            return {...store, manage_contact_status:payload}
        case ADD_CONTACTS:
            return {...store, Contacts:[...store.Contacts, payload]}
        case REMOVE_CONTACT:
            return {...store, Contacts:store.Contacts.filter((Element)=>Element!==payload)}
        case ADD_REQUIREMENTS:
            return {...store, requirements:[...store.requirements, payload]}
        case ALL_CONTACTS:
            return {...store, allContacts:payload}
        case ALL_TRASHES:
            return {...store, allTrashes:payload}
        case SET_EDIT:
            return { ...store, Edit:payload }
        case RES_CONTACTS:
            return {...store, ResContacts:payload}
        case RES_DUPLICATES:
            return {...store, ResDuplicates:payload}
        case RES_TRASHES:
            return {...store, ResTrashes:payload}
        case SET_FORM:
            return {...store, formData:payload}
        default:
            return store;
    }
}