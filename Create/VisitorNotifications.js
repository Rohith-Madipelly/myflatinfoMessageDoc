// categoryId >> resposivbel for actions buttons
//channelId >> sound and catogori in andiord

const VisitorNotificationsMap = {
  // ✅ PLANNED VISITOR CHECK-IN (AllowIn)
  PLANNED_VISITOR_ALLOW_IN: {
    // security >> user
    // status: "AllowIn",
    title: "Visitor Checked In",
    message: "Planned visitor #[visitor_name] has successfully checked in.",
    data: {
      screen: "Visitors",
      params: JSON.stringify({
        screenTab: "Planned Visitors",
        visitor_id: "73",
        building_id: "1"
      }),
    },
    categoryId: "PlannedVisitors",
    channelId: "security",
    sound: "bellnotificationsound.wav",
  },

  // ✅ PLANNED VISITOR CHECKOUT (Completed)
  PLANNED_VISITOR_COMPLETED: {
    // security >> user
    //  status: "Completed",
    title: "Visitor Checked Out",
    message:
      "Planned visitor #[visitor_name] has checked out from the premises.",
    data: {
      screen: "Visitors",
      params: JSON.stringify({ screenTab: "Completed", visitor_id: "73", building_id: "1" }),
    },
    categoryId: "PlannedVisitors",
    channelId: "security",
    sound: "bellnotificationsound.wav",
  },

  // 🔶 UNPLANNED VISITOR RAISED BY SECURITY (Waiting for user action)
  UNPLANNED_VISITOR_ACTION_REQUIRED: {
    // security >> user
    //  status: "Inactive",
    title: "Visitor Approval Needed",
    message:
      "Security has raised an unplanned visitor request. Please respond with an action.",
    data: {
      screen: "Visitors",
      params: JSON.stringify({
        screenTab: "Unplanned Visitors",
        visitor_id: "73",
        building_id: "1"
      }),
    },
    categoryId: "UnplannedVisitors",
    channelId: "user",
    sound: "bellnotificationsound.wav",
    actionButtons: ["Allow", "Deny", "Stay at Lobby"],
  },

  // 🟢 USER RESPONDED TO UNPLANNED VISITOR (AllowIn / Deny / Stay at Lobby)
  UNPLANNED_VISITOR_USER_RESPONDED: {
    // user >> security
    // status: "[action]",
    title: "Visitor Action Response Sent",
    message: "User has responded with '[action]' for visitor #[visitor_name].",
    data: {
      screen: "VisitorEntryDetails",
      params: JSON.stringify({ visitor_id: "3", building_id: "1" }),
    },
    categoryId: "UnplannedVisitors",
    channelId: "security",
    sound: "bellnotificationsound.wav",
  },

  // ✅ UNPLANNED VISITOR CHECKED OUT (Completed)
  UNPLANNED_VISITOR_COMPLETED: {
    // security >> user
    //  status: "Completed",
    title: "Unplanned Visitor Checked Out",
    message:
      "Unplanned visitor #[visitor_id] has checked out from the premises.",
    data: {
      screen: "Visitors",
      params: JSON.stringify({ screenTab: "Completed", visitor_id: "73", building_id: "1" }),
    },
    categoryId: "UnplannedVisitors",
    channelId: "security",
    sound: "bellnotificationsound.wav",
  },
};

function VisitorNotifications(key) {
  const notification = VisitorNotificationsMap[key];
  if (!notification) {
    throw new Error(`Notification type "${key}" not found.`);
  }
  return notification;
}

module.exports = {
  VisitorNotifications,
};
