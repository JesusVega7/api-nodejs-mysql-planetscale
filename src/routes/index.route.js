import { Router } from "express";

import userRouter from "./user.route.js";

const indexRouter = Router();

const prefix = "/api";

indexRouter.get(prefix, (req, res) => {
  res.send("Welcome to Planetscale API");
});

indexRouter.use(`${prefix}/users`, userRouter);

export default indexRouter;
