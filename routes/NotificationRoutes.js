const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

router.put('/', NotificationController.markAllNotificationsAsRead);
router.put('/:idnotification', NotificationController.markNotificationAsRead);
router.get('/:iduser', NotificationController.getNotificationsByUser);

module.exports = router;
