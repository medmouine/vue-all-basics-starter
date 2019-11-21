import Jobs from "./jobs";

export default class JobsRepository {
  constructor() {
    this.jobs = Jobs;
  }

  getById(id) {

    return this.jobs.find((c) => c.id === id);
  }

  getAll() {
    return this.jobs;
  }

  create(job) {
    job.id = (Math.max.apply(null, this.jobs.map(x => x.id))) + 1;
    job.date_posted = new Date().toString();
    this.jobs.push(job);
  }

  remove(id) {
    const index = this.jobs.findIndex(x => x.id === id);
    this.jobs.splice(index, 1);
  }

  update(job) {
    const index = this.jobs.findIndex(x => x.id === job.id);
    this.jobs[index] = job;
  }
}
