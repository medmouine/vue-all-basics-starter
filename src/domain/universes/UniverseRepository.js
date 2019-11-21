import _ from "lodash";
import UNIVERSES from "./universes";

export default class UniverseRepository {
  constructor() {
    this.universes = _.cloneDeep(UNIVERSES);
  }

  getById(id) {
    console.log(this.universes.find())
    return this.universes.find((c) => c.id == id);
  }

  getAll() {
    return this.universes;
  }
}
