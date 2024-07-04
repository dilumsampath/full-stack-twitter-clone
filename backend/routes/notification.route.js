import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  deleteNotifications,
  deleteOneNotification,
  getNotifications,
} from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
//for delete all notifications
router.delete("/", protectRoute, deleteNotifications);
//for delete one notification
router.delete("/:id", protectRoute, deleteOneNotification);

export default router;
