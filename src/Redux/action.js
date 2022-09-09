
export const MANAGE_CONTACT_STATUS = "MANAGE_CONTACT_STATUS";
export const TYPE = "TYPE";
export const PHONE = "PHONE";
export const EMAIL = "EMAIL";
export const LANDLINE = "LANDLINE";
export const STATE = "STATE";
export const DISTRICT = "DISTRICT";
export const COMMODITY = "COMMODITY";
export const FROM = "FROM";
export const INDUSTRY = "INDUSTRY";
export const DESTINATION = "DESTINATION";
export const QUANTITY = "QUANTITY";
export const ADD_CONTACTS = "ADD_CONTACTS";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const ADD_REQUIREMENTS = "ADD_REQUIREMENTS";
export const ALL_CONTACTS = "ALL_CONTACTS";
export const ALL_TRASHES = "ALL_TRASHES";

export const manageContactStatus = payload =>({
    type:MANAGE_CONTACT_STATUS, payload
})
export const setType = (payload) =>({
    type:TYPE, payload
});

export const setPhone = (payload)=>({
    type:PHONE, payload
});

export const setEmail = (payload)=>({
    type:EMAIL, payload
});

export const setLandline = (payload) =>({
    type:LANDLINE, payload
});

export const setState = (payload) =>({
    type:STATE, payload
});

export const setDistrict = (payload)=>({
    type:DISTRICT, payload
});

export const setCommodity = (payload) =>({
    type:COMMODITY, payload
});

export const setFrom = (payload)=>({
    type:FROM, payload
});

export const setIndustry = (payload)=>({
    type:INDUSTRY, payload
});

export const setDestination = (payload) =>({
    type:DESTINATION, payload
});

export const setQuantity = (payload) =>({
    type:QUANTITY, payload
})

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
})