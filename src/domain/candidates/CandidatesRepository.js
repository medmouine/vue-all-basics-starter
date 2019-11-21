import _ from "lodash";
import CANDIDATES from "./candidates";

export default class CandidatesRepository {
  constructor() {
    this.candidates = _.cloneDeep(CANDIDATES);
  }

  getById(id) {
    return this.candidates.find((c) => c.id == id);
  }

  getAll() {
    return this.candidates;
  }

  create(candidate) {
    candidate.id = (Math.max.apply(this.candidates.map(x => x.id)) || 0) + 1;
    this.candidates.push(candidate);
  }

  remove(id) {
    this.candidates = this.candidates.filter(c => c.id !== id);
  }

  update(candidate) {
    const index = this.candidates.findIndex(x => x.id === candidate.id);
    this.candidates[index] = candidate;
  }
}
