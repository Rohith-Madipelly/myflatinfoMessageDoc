// categoryId >> resposivbel for actions buttons
//channelId >> sound and catogori in andiord

// {     "screen": "My Parcels", "params": { "ScreenTab": "Delivered Parcels" } }
// {     "screen": "My Parcels", "params": { "ScreenTab": "Incoming Parcels" } }

// ParcelRespose


//ScreenTab >> Incoming Parcels
// OnGoing
// Allow
// CheckIn
// LeaveAtGate
// StoredInSecurity


// ScreenTab >> Delivered Parcels
// DeliveredReturned
// GivenToUser
// ReturnedRejected



const parcelNotificationMap = {

    PARCEL_CREATED: {
        //Security >> user
        //status :  OnGoing
        title: "New Parcel Delivery",
        message: "You have a delivery: Biriyani Delivery by Ramesh. Please respond: Allow, Leave at Gate, or Deny.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ ScreenTab: "Incoming Parcels", parcel_id: "1" }),
        },
        categoryId: "ParcelRespose",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },

    PARCEL_ALLOWED: {
        //user >> Security
        //status :  Allow
        title: "Parcel Approved by Resident",
        message: "User of [flat_no] [block_name] has allowed the delivery. Please proceed with check-in.",
        data: {
            screen: "ParcelSecurity",
            params: JSON.stringify({ ScreenTab: "Incoming Parcels", parcel_id: "123" }),
        },
        categoryId: "ParcelCheck-in",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },

    PARCEL_CHECKED_IN: {
        //Security >> user
        //status :  CheckIn
        title: "Delivery Checked In",
        message: "The delivery person has been checked in for parcel #[parcel_id].",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ ScreenTab: "Incoming Parcels", parcel_id: "123" }),
        },
        categoryId: "",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },

    PARCEL_DELIVERED_RETURNED: {
        //Security >> user
        //status :  DeliveredReturned
        title: "Parcel Delivered",
        message: "The parcel #[parcel_id] has been delivered and the delivery person has exited.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ "ScreenTab": "Delivered Parcels", parcel_id: "123" }),
        },
        categoryId: "",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },


    //LEAVE_AT_GATE 
    PARCEL_LEAVE_AT_GATE: {
        //user >> Security
        //status :  LeaveInGate
        title: "Leave at Gate Confirmed",
        message: "User of [flat_no] [block_name] requested the parcel be left at the gate. Please store it safely.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ ScreenTab: "Incoming Parcels", parcel_id: "123" }),
        },
        categoryId: "Parcelstore",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },
    PARCEL_STORED_IN_SECURITY: {
        //Security >> user
        //status :StoredInSecurity
        title: "Parcel Stored at Security",
        message: "The parcel #[parcel_id] has been stored at the security desk.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ ScreenTab: "Incoming Parcels", parcel_id: "123" }),
        },
        categoryId: "ParcelStatusUpdates",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },
    PARCEL_GIVEN_TO_USER: {
        //Security >> user
        //status :GivenToUser
        title: "Parcel Handed Over",
        message: "The parcel #[parcel_id] has been handed over to the user.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ "ScreenTab": "Delivered Parcels", parcel_id: "123" }),
        },
        categoryId: "ParcelStatusUpdates",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },


    PARCEL_DENIED: {
        //user >> Security
        //status :Deny
        title: "Parcel Denied by Resident",
        message: "User of [flat_no] [block_name] denied the parcel #[parcel_id]. Please return it to the delivery person.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ parcel_id: "123" }),
        },
        categoryId: "ParcelDenied",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    },
    PARCEL_RETURNED_REJECTED: {
        //Security >> user
        //status :ReturnedRejected
        title: "Parcel Returned to Delivery Person",
        message: "The parcel #[parcel_id] has been returned after user rejection.",
        data: {
            screen: "My Parcels",
            params: JSON.stringify({ "ScreenTab": "Delivered Parcels", parcel_id: "123" }),
        },
        categoryId: "ParcelStatusUpdates",
        channelId: "Parcel",
        sound: "bellnotificationsound.wav",
    }
};

function getNotificationMessageAndDataParcelManagment(key) {

    const notification = parcelNotificationMap[key];
    if (!notification) {
        throw new Error(`Notification type "${key}" not found.`);
    }
    return notification;
}

module.exports = {
    getNotificationMessageAndDataParcelManagment,
    parcelNotificationMap
};


const AnalogueLogo = 'https://www.analogueitsolutions.com/assets/analogueitsolution_logo-BVdZYf9n.png';




// Workflow	Status	Tab	Suggested Label
// Allow	OnGoing	Incoming Parcels	"Waiting for your action"
// Allow	Incoming Parcels	"Allowed, pending check-in"
// CheckIn	Incoming Parcels	"Checked in, at reception"
// DeliveredReturned	Completed	"Delivered / Returned"
// LeaveAtGate	OnGoing	Incoming Parcels	"Waiting for your action"
// LeaveAtGate	Incoming Parcels	"Leave at gate selected"
// StoredInSecurity	Incoming Parcels	"Stored with security"
// GivenToUser	Completed	"Picked up"
// Deny	OnGoing	Incoming Parcels	"Waiting for your action"
// Deny	Incoming Parcels	"Denied, returning"
// ReturnedRejected	Completed	"Returned to sender"