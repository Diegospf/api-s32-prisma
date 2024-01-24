import { Router } from "express";

import { userRoutes } from "./user.routes";
import { rateRoutes } from "./rate.routes";
import { myListRoutes } from "./mylist.routes";
import { s32ListRoutes } from "./s32.routes";
import { weekRoutes } from "./week.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/rate", rateRoutes);
routes.use("/mylist", myListRoutes);
routes.use("/s32list", s32ListRoutes);
routes.use("/week", weekRoutes);

export { routes };