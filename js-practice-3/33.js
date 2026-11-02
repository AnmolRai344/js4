class NotificationManager {
    constructor() {
        this.notifications = [];
        this.nextId = 1;
    }

    addNotification(message, type = "info") {
        const notification = {
            id: this.nextId++,
            message,
            type,
            read: false,
            createdAt: new Date().toISOString()
        };

        this.notifications.push(notification);

        return notification;
    }

    markAsRead(id) {
        const notification = this.notifications.find(
            item => item.id === id
        );

        if (!notification) {
            return "Notification not found";
        }

        notification.read = true;

        return notification;
    }

    getUnreadCount() {
        return this.notifications.filter(
            item => !item.read
        ).length;
    }
}

const manager = new NotificationManager();

manager.addNotification("Welcome to GenWeb.ai");
manager.addNotification("Your website has been generated", "success");
manager.addNotification("Payment successful", "success");

manager.markAsRead(1);

console.log("Notifications:", manager.notifications);
console.log("Unread:", manager.getUnreadCount());