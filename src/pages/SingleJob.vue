<template>
  <form>
    <md-card>
      <md-card-header :data-background-color="'green'">
        <h4 class="title">{{ $t("jobs.editTitle") }}</h4>
        <p class="category">{{ $t("jobs.editDescription") }}</p>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div
            class="md-layout-item md-small-size-100 md-size-50"
            v-if="job.id"
          >
            <md-field>
              <label>{{ $t("jobs.id") }}</label>
              <md-input v-model="job.id" disabled></md-input>
            </md-field>
          </div>
          <div
            class="md-layout-item md-small-size-100 md-size-50"
            v-if="job.id"
          >
            <md-field>
              <label>{{ $t("jobs.postedOn") }}</label>
              <md-input v-model="job.date_posted" disabled></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{ $t("jobs.salary") }}</label>
              <md-input
                v-model="job.salary"
                type="number"
                default="0"
                :min="0"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label for="educ_level">{{ $t("jobs.educationLevel") }}</label>
              <md-select v-model="job.education_level" name="educ_level">
                <md-option
                  v-for="edu in educationLevels"
                  :value="edu.id"
                  v-bind:key="'edu-' + edu.id"
                  >{{ edu.Education_Level }}
                </md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label for="univ">{{ $t("jobs.universe") }}</label>
              <md-select v-model="job.work_universe" name="univ">
                <md-option
                  v-for="uni in universes"
                  :value="uni.id"
                  v-bind:key="'uni-' + uni.id"
                  >{{ uni.Universe }}
                </md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{ $t("jobs.workLocation") }}</label>
              <md-input v-model="job.work_location" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>{{ $t("jobs.requiredSkills") }}</label>
              <md-input v-model="job.required_skill" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{ $t("jobs.description_fr") }}</label>
              <md-textarea v-model="job.description_fr"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>{{ $t("jobs.description_en") }}</label>
              <md-textarea v-model="job.description_en"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Latitude</label>
              <md-input v-model="job.position[0]" type="number" :min="-180" :max="180"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Longitude</label>
              <md-input v-model="job.position[1]" type="number" :min="-180" :max="180"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button
              class="md-raised md-danger"
              @click="deleteJob"
              v-if="job.id"
              >{{ $t("jobs.deleteJob") }}
            </md-button>
            <md-button class="md-raised md-success" @click="updateJob"
              >{{ $t("jobs.updateJob") }}
            </md-button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>

<script>
import JobsRepository from "../domain/jobs/JobsRepository";
import UniverseRepository from "../domain/universes/UniverseRepository";
import EducationRepository from "../domain/education/EducationRepository";
import _ from "lodash";

export default {
  name: "SingleJob",
  mounted() {
    this.jobsRepository = new JobsRepository();
    this.universeRepository = new UniverseRepository();
    this.educationRepository = new EducationRepository();

    const job = _.cloneDeep(
      this.jobsRepository.getById(parseInt(this.$route.params.id))
    );
    if (job) this.job = job;
    this.educationLevels = this.educationRepository.getAll();
    this.universes = this.universeRepository.getAll();
  },
  data() {
    return {
      job: {
        work_universe: 1,
        education_level: 1,
        position: [100, 100]
      },
      educationLevels: [],
      universes: []
    };
  },
  methods: {
    updateJob() {
      console.log();
      if (this.job.id) {
        this.jobsRepository.update(this.job);
      } else {
        this.jobsRepository.create(this.job);
      }

      this.$router.push("/jobs");
    },
    deleteJob() {
      this.jobsRepository.remove(this.job.id);
      this.$router.push("/jobs");
    }
  }
};
</script>

<style scoped></style>
