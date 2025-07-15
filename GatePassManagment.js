// categoryId >> resposivbel for actions buttons
//channelId >> sound and catogori in andiord

// {     "screen": "My Parcels", "params": { "ScreenTab": "Delivered Parcels" } }
// {     "screen": "My Parcels", "params": { "ScreenTab": "Incoming Parcels" } }


const parcelNotificationMap = {

    //No Need for GATEPASS_APPROVED

    // GATEPASS_APPROVED: {
    //     // user >> security
    //     // status: Approved
    //     // title: "Gate Pass Request Submitted",
    //     // message: "A new gate pass has been submitted by [flat_no] [block_name]. Please verify and proceed with checkout.",
    //     // data: {
    //     //     screen: "GatePassSecurity",
    //     //     params: JSON.stringify({ screenTab: "Approved GatePasses", gate_pass_id: "1",visitor_id:"73" }),
    //     // },
    //     // categoryId: "GatePassRequest",
    //     // channelId: "GatePass",
    //     // sound: "bellnotificationsound.wav",
    // },


    // GATEPASS_CHECKED_OUT: {
    //     // security >> user
    //     // status: CheckedOut
    //     title: "Gate Pass Checked Out",
    //     message: "Gate pass #[gate_pass_id] has been successfully verified and checked out.",
    //     data: {
    //         screen: "MyGatePasses",
    //         params: JSON.stringify({ screenTab: "Completed", gate_pass_id: "1",visitor_id:"73" }),
    //     },
    //     categoryId: "GatePassUpdate",
    //     channelId: "GatePass",
    //     sound: "bellnotificationsound.wav",
    // },

    GATEPASS_REJECTED_BY_SECURITY: {
        // security >> user
        // status: Rejected (due to discrepancy)
        title: "Gate Pass Discrepancy Found",
        message: "Security has found a mismatch in your gate pass #[gate_pass_id]. Please review and respond.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "Discrepancy", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassDiscrepancy",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    },
    GATEPASS_APPROVED_EXTRA_ITEM: {
        // user >> security
        // status: ApprovedExtraItem
        title: "Extra Item Approved",
        message: "User of [flat_no] [block_name] has approved the extra item. Please allow checkout with the additional item.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "Discrepancy Approved", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassUpdate",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    },
    GATEPASS_CHECKED_OUT_EXTRA_ITEM: {
        // security >> user
        // status: CheckedOutExtraItem
        title: "Gate Pass with Extra Item Checked Out",
        message: "Gate pass #[gate_pass_id] has been checked out including the extra item.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "Completed", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassUpdate",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    },
    GATEPASS_REJECTED_EXTRA_ITEM: {
        // user >> security
        // status: RejectedExtraItem
        title: "Extra Item Denied by User",
        message: "User of [flat_no] [block_name] has denied the extra item in gate pass #[gate_pass_id]. Please store it at security.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "StoreExtraItems", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassUpdate",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    },
    EXTRA_ITEM_STORED_AT_SECURITY: {
        // security >> user
        // status: storedExtraItemSecurity
        title: "Extra Item Stored at Security",
        message: "Your extra item from gate pass #[gate_pass_id] has been stored at the security desk. Please collect it at your convenience.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "Pending Collection", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassStorage",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    },
    EXTRA_ITEM_GIVEN_TO_USER: {
        // security >> user
        // status: ExtraItemGivenUser
        title: "Extra Item Collected",
        message: "You have successfully collected the extra item from gate pass #[gate_pass_id] at the security desk.",
        data: {
            screen: "VisitorsViewGatePass",
            params: JSON.stringify({ screenTab: "Completed", gate_pass_id: "1", visitor_id: "73" }),
        },
        categoryId: "GatePassStorage",
        channelId: "GatePass",
        sound: "bellnotificationsound.wav",
    }
};

function getNotificationMessageAndGatePassManagment(key) {

    const notification = parcelNotificationMap[key];
    if (!notification) {
        throw new Error(`Notification type "${key}" not found.`);
    }
    return notification;
}

module.exports = {
    getNotificationMessageAndGatePassManagment,
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