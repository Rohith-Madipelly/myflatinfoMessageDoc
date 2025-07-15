
const notificationMap = {

  MAINTENANCE_ADDED: {
    title: "New Maintenance Payment Added",
    message: "A new maintenance payment has been added by the BA. Please check the details and complete the payment.",
    data: {
      screen: "MaintenancePage",
      params: JSON.stringify({ maintenanceId: "1" }),
    },
    categoryId: "UnplannedVisitors",
    channelId: "app",
    sound: 'bellnotificationsound.wav',
  },

  SOCIETY_FUND_TRANSACTIONS: {
    title: "Society Fund Transactions",
    message: "View all your society-related transactions in one place, including payments for maintenance, events, and corpus funds.",
    data: {
      screen: "SocietyFundPage",
      params: JSON.stringify({ filter: "1" }),
    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

    EVENT_ADDED: {
    title: "Event added by ba",
    message: " You can now download your payment receipt.",
    data: {
      screen: "Timeline",
      params: JSON.stringify({ "ScreenTab": "Events"  }),
    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',

  },

  EVENT_PAYMENT_SUCCESS: {
    title: "Event Payment Successful",
    message: "Your payment of ₹[amount] for the event was successful. You can now download your payment receipt.",
    data: {
      screen: "EventsFundList",
      params: JSON.stringify({ eventID: "1" }),
    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',

  },

  ESSENTIAL_PAYMENT_ADDED: {
    title: "New Essential Payment Added",
    message: "A new essential payment has been added by the BA. Please review the details and proceed with the payment.",
    data: {
      screen: "EssentialsList",
      params: JSON.stringify({ essentialsID: "1" }),
    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  CORPUS_PAYMENT_SUCCESS: {
    title: "Corpus Fund Payment Successful",
    message: "Your payment of ₹[amount] towards the corpus fund was successful. You can now download your receipt.",
    data: {
      screen: "CorpusFundPage",
      params: "",
    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  NEW_BANNER_AVAILABLE: {
    title: "New Banner Available",
    message: "A new banner has been uploaded. Check it out now to explore the latest updates.",
    data: {
      screen: "Home",
      params: "",

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  TIMELINE_NOTICE_ADDED: {
    title: "Hey your order is placed",
    message: "",
    data: {
      screen: "Timeline",
      params: JSON.stringify({ ScreenTab: "Notice Board" }),

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  TIMELINE_EVENT_ADDED: {
    title: "Hey your order is placed",
    message: "",
    data: {
      screen: "Timeline",
      params: JSON.stringify({ ScreenTab: "Events" }),

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  TIMELINE_CLASSIFIEDS_ADDED: {
    title: "Hey your order is placed",
    message: "",
    data: {
      screen: "Timeline",
      params: JSON.stringify({ ScreenTab: "Classifieds" }),

    },
    categoryId: "UnplannedVisitors",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  UNPLANNED_VISITOR_ARRIVED: {
    title: "Your guest {rohith} has arrived at the gate..",
    message: "Please confirm their entry.",
    data: {
      screen: "Visitors",
      params: JSON.stringify({ ScreenTab: "Unplanned Visitors" }),

    },
    categoryId: "UnplannedVisitors",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  POST_CLASSIFIEDS_INVITE: {
    title: "Got Something to Share? Post it to Your Building!",
    message: "Now you can post classifieds visible to your flat or the entire building. It's quick, easy, and reaches everyone in seconds!",
    data: {
      screen: "Classifieds",
      params: JSON.stringify({ ScreenTab: "Post Classifieds" }),

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  CLASSIFIEDS_POST_APPROVED: {
    title: "Your Post is Live!",
    message: "Your classified has been approved by the admin and is now visible to selected members. 🚀",
    data: {
      screen: "Classifieds",
      params: JSON.stringify({ ScreenTab: "Post Status" }),

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  CLASSIFIEDS_POST_UNDER_REVIEW: {
    title: "Your Post is Under Review",
    message: "An admin is reviewing your classified. You'll be notified once it's approved or needs changes. 🔍",
    data: {
      screen: "Classifieds",
      params: JSON.stringify({ ScreenTab: "Post Status" }),

    },
    categoryId: "",
    channelId: "",
    sound: 'bellnotificationsound.wav',
  },

  CLASSIFIEDS_POST_REJECTED: {
    title: "Your Post Was Rejected",
    message: "Unfortunately, your classified was not approved. Please review and edit your post before resubmitting. ✏️",
    data: {
      screen: "Classifieds",
      params: JSON.stringify({ ScreenTab: "Post Status", id: "34" }),

    },
    categoryId: "UnplannedVisitors",
    channelId: "app",
    sound: 'bellnotificationsound.wav',
  }
};

function getNotificationMessageAndData(key) {
  const notification = notificationMap[key];
  if (!notification) {
    throw new Error(`Notification type "${key}" not found.`);
  }
  return notification;
}

module.exports = {
  getNotificationMessageAndData,
  notificationMap
};


const AnalogueLogo = 'https://www.analogueitsolutions.com/assets/analogueitsolution_logo-BVdZYf9n.png';