import BaseController from "../utils/BaseController";
import { catService } from "../services/CatService";



export class CatController extends BaseController {

    constructor() {
        super('api/cats')
        this.router
            .get('', this.getAll)
            .delete('/:catId', this.delete)
            .post('', this.create)
    }

    getAll(req, res, next) {
        try {
            let cats = catService.getAll()
            res.send({ data: cats, message: "Got the cats!" })
        } catch (error) {
            next(error)
        }
    }

    create(req, res, next) {
        try {
            let rawCatData = req.body
            catService.create(rawCatData)
            res.send({ data: rawCatData, message: "Created cat!" })
        } catch (error) {
            next(error)
        }
    }

    delete(req, res, next) {
        try {
            let id = req.params.catId
            catService.delete(id)
            res.send({ message: "Delorted cat!" })
        } catch (error) {
            next(error)
        }
    }
}