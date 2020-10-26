import { FAKEDB } from "../db/FAKEDB";
import { BadRequest } from "../utils/Errors";

class CatService {
    edit(id, modifiedData) {
        if (!modifiedData.hasOwnProperty("name") || !modifiedData.hasOwnProperty("color")) {
            throw new BadRequest("Cat needs a name and or color yo. This is a raw cat")
        }
        let index = FAKEDB.cats.findIndex(c => c.id == id)
        if (index < 0) {
            throw new BadRequest("No cat by that id")
        }
        FAKEDB.cats[index] = modifiedData
    }

    delete(id) {
        let index = FAKEDB.cats.findIndex(c => c.id == id)
        if (index < 0) {
            throw new BadRequest("No cat by that id")
        }
        FAKEDB.cats.splice(index, 1)
    }

    create(rawCatData) {
        if (!rawCatData.hasOwnProperty("name") || !rawCatData.hasOwnProperty("color")) {
            throw new BadRequest("Cat needs a name and or color yo. This is a raw cat")
        }
        rawCatData.id = FAKEDB.cats.length
        FAKEDB.cats.push(rawCatData)
    }

    getAll() {
        return FAKEDB.cats
    }
}


export const catService = new CatService()