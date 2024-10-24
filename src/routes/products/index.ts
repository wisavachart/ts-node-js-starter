import { Router } from "express";
import {
  listProducts,
  createProducts,
  deleteProducts,
  getlistProductsByID,
  updateProducts,
  // ProductController,
} from "./productsController";

const router = Router();
// const productController = new ProductController();

// router.get("/", productController.getlistProducts);
// router.get("/:id", productController.getlistProductsByID);
// router.post("/", productController.createProducts);
router.get("/", listProducts);
router.get("/:id", getlistProductsByID);
router.post("/", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
