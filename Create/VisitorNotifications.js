// categoryId >> resposivbel for actions buttons
//channelId >> sound and catogori in andiord


const VisitorNotificationsMap = {

    //Un Planned Vistor
    //resend 
    // extend stay time 
};

function VisitorNotifications(key) {

    const notification = VisitorNotificationsMap[key];
    if (!notification) {
        throw new Error(`Notification type "${key}" not found.`);
    }
    return notification;
}

module.exports = {
    VisitorNotifications
};
