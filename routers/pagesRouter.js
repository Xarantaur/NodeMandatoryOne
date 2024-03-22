import { Router } from "express";
import {
  homepagePage,
  thirddayclassPage,
  firstdayclassPage,
  seconddayclassPage,
  fourthdayclassPage,
  fifthdayclassPage,
  sixthdayclassPage
} from "../util/readPages.js"; // indsæt pages der skal routes i {}

const router = Router();
//Homepage
router.get("/", (req, res) => {
  res.send(homepagePage);
});
//ThirdDay
router.get("/thirddayclass", (req, res) => {
  res.send(thirddayclassPage);
});
// First Day
router.get("/firstdayclass", (req, res) => {
  res.send(firstdayclassPage);
});
//secondday
router.get("/seconddayclass", (req, res) => {
  res.send(seconddayclassPage);
});
//fourthday
router.get("/fourthdayclass", (req, res) => {
  res.send(fourthdayclassPage);
});
//fifthDay
router.get("/fifthdayclass", (req, res) => {
  res.send(fifthdayclassPage);
});
//sixthday
router.get("/sixthdayclass", (req, res) => {
  res.send(sixthdayclassPage);
});

export default router;
