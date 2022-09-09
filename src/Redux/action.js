
export const MANAGE_CONTACT_STATUS = "MANAGE_CONTACT_STATUS";
export const ADD_CONTACTS = "ADD_CONTACTS";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const ADD_REQUIREMENTS = "ADD_REQUIREMENTS";
export const ALL_CONTACTS = "ALL_CONTACTS";
export const ALL_TRASHES = "ALL_TRASHES";
export const SET_EDIT = "SET_EDIT";
export const RES_DUPLICATES = "RES_DUPLICATES";
export const RES_TRASHES = "RES_TRASHES";
export const RES_CONTACTS = "RES_CONTACTS";

export const manageContactStatus = payload =>({
    type:MANAGE_CONTACT_STATUS, payload
});

export const addContacts = (payload) =>({
   type:ADD_CONTACTS, payload
});

export const removeContact = (payload) =>({
    type:REMOVE_CONTACT, payload
});

export const addRequirements = (payload) =>({
    type:ADD_REQUIREMENTS, payload
})

export const setAllContacts = (payload)=>({
    type:ALL_CONTACTS, payload
});

export const setAllTrashes = (payload)=>({
    type:ALL_TRASHES, payload
});

export const setEdit = payload=>({
    type:SET_EDIT, payload
});

export const resDuplicates = payload =>({
    type: RES_DUPLICATES, payload
});

export const resTrashes = payload =>({
    type:RES_TRASHES, payload
});

export const resContacts = payload =>({
    type:RES_CONTACTS, payload
})
