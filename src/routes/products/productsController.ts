import { Request, Response } from "express";
export function listProducts(req: Request, res: Response) {
  res.send("the list of produts");
}
export function getlistProductsByID(req: Request, res: Response) {
  res.send("the list of produts");
}
export function createProducts(req: Request, res: Response) {
  res.send(req.body);
}
export function updateProducts(req: Request, res: Response) {
  res.send("the list of produts");
}
export function deleteProducts(req: Request, res: Response) {
  res.send("the list of produts");
}

// export class ProductController {
//   getlistProducts(req: Request, res: Response) {
//     res.send("get the list of produts");
//   }
//   getlistProductsByID(req: Request, res: Response) {
//     res.send("get the list of produts");
//   }
//   createProducts(req: Request, res: Response) {
//     res.send("get the list of produts");
//   }
//   updateProducts(req: Request, res: Response) {
//     res.send("get the list of produts");
//   }
//   deleteProducts(req: Request, res: Response) {
//     res.send("get the list of produts");
//   }
// }
