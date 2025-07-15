// categoryId >> resposivbel for actions buttons
//channelId >> sound and catogori in andiord


const HomeNotificationsMap = {

    //Home 
    //Admin Added New banner
    ADMIN_ADDED_NEW_BANNER: {
        title: "New Announcement",
        message: "A new banner has been posted. Tap to view the latest updates from the admin.",
        data: {
            screen: "Home",
            // params: JSON.stringify({ "ScreenTab": "Delivered Parcels", parcel_id: "123" }),
        },
        categoryId: "AdminUpdates",
        channelId: "Admin",
        sound: "bellnotificationsound.wav",
    },

    //Timeline
    NOTICE_BOARD_NEW_NOTICE: {
        title: "New Notice Posted",
        message: "A new notice has been added to your building's notice board. Tap to view the details.",
        data: {
            screen: "Timeline",
            params: JSON.stringify({ "ScreenTab": "Notice Board", "noticeboardId": 1 }),
        },
        categoryId: "NoticeBoard",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },

    NOTICE_BOARD_UPDATED: {
        title: "Notice Updated",
        message: "A previously posted notice has been updated. Check the latest version now.",
        data: {
            screen: "Timeline",
            params: JSON.stringify({ "ScreenTab": "Notice Board", "noticeboardId": 1 }),
        },

        categoryId: "NoticeBoard",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },


    //Add events
    EVENT_ADDED: {
        title: "New Event in Your Community!",
        message: "A new event has been posted. Check it out and RSVP today!",
        data: {
            screen: "Timeline",
            params: JSON.stringify({ "ScreenTab": "Events", "event_id": 1 }),
        },
        categoryId: "Events",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },
    EVENT_UPDATED: {
        title: "Event Details Updated",
        message: "An upcoming event has been updated. Tap to view the latest information.",
        data: {
            screen: "Timeline",
            params: JSON.stringify({ "ScreenTab": "Events", "event_id": 1 }),
        },
        categoryId: "Events",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },

    //1. Admin Encourages Posting Classifieds
    CLASSIFIEDS_INVITE_POST: {
        title: "Got Something to Share? Post it to Your Building!",
        message: "Now you can post classifieds visible to your flat or the entire building. It's quick, easy, and reaches everyone in seconds!",
        data: {
            screen: "Classifieds",
            params: JSON.stringify({ "classified_id": 1 }),
        },
        categoryId: "Classifieds",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },

    // ✅ 2. Admin Approves Post
    CLASSIFIEDS_APPROVED: {
        title: "Your Post is Live!",
        message: "Your classified has been approved by the admin and is now visible to selected members. 🚀",
        data: {
            screen: "Classifieds",
            params: JSON.stringify({ "classified_id": 1, "ScreenTab": "MyPosts", }),
        },
        categoryId: "Classifieds",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },

    //🔍 3. Admin Sends Post for Review
    CLASSIFIEDS_UNDER_REVIEW: {
        title: "Your Post is Under Review",
        message: "An admin is reviewing your classified. You'll be notified once it's approved or needs changes. 🔍",
        data: {
            screen: "Classifieds",
            params: JSON.stringify({ "classified_id": 1, "ScreenTab": "MyPosts", }),
        },
        categoryId: "Classifieds",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    },
    //❌ 4. Admin Rejects Post

    CLASSIFIEDS_REJECTED: {
        title: "Your Post Was Rejected",
        message: "Unfortunately, your classified was not approved. Please review and edit your post before resubmitting. ✏️",
        data: {
            screen: "Classifieds",
            params: JSON.stringify({ "classified_id": 1, "ScreenTab": "MyPosts", }),
        },
        categoryId: "Classifieds",
        channelId: "Community",
        sound: "bellnotificationsound.wav",
    }

};

function HomeTimelineNotifications(key) {

    const notification = HomeNotificationsMap[key];
    if (!notification) {
        throw new Error(`Notification type "${key}" not found.`);
    }
    return notification;
}

module.exports = {
    HomeTimelineNotifications
};
