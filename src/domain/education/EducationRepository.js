import _ from "lodash";
import EDUCATION_LEVEL from "./educationLevel";

export default class EducationRepository {
  constructor() {
    this.levels = _.cloneDeep(EDUCATION_LEVEL);
  }

  getById(id) {
    return this.levels.first(c => c.id === id);
  }

  getAll() {
    return this.levels;
  }
}
