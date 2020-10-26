import express from "express";
import BaseController from "../utils/BaseController";
import { valuesService } from "../services/ValueService";

export class ValuesController extends BaseController {
  constructor() {
    super("api/values");
    this.router
      .get("", this.getAll)
      .get("", this.getOtherValues)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      return res.send(["value1", "value2"]);
    } catch (error) {
      next(error);
    }
  }

  async getOtherValues(req, res, next) {
    try {
      return res.send(["value3", "value4"]);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
