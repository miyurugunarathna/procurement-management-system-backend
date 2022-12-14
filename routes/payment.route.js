import express from "express";
import {
  savePaymentController,
  getPaymentController,
  getPaymentByIdController,
  updatePaymentController,
  deletePaymentController,
  getPaymentByManagerIdController,
} from "../controllers/index.js";
import { authenticate } from "../middleware/auth.middleware.js";

const paymentRouter = express.Router();

paymentRouter.post("/", authenticate, savePaymentController);
paymentRouter.put("/:id", updatePaymentController);
paymentRouter.delete("/:id", deletePaymentController);
paymentRouter.get("/manager", authenticate, getPaymentByManagerIdController);
paymentRouter.get("/:id", getPaymentByIdController);
paymentRouter.get("/", getPaymentController);

export default paymentRouter;
