<template>
  <div class="content">
    <div class="md-layout">
      <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100 pull-right"
      >
        <md-button class="md-raised md-info" @click="createNew"
        >
          <md-icon>add</md-icon>{{ $t("jobs.createJob") }}
        </md-button>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">{{$t('jobs.available')}}</h4>
            <p class="category">{{$t('jobs.availableDescription')}}</p>
          </md-card-header>
          <md-card-content>
            <div>
              <md-table v-model="jobs" :table-header-color="'green'">
                <md-table-row
                  slot="md-table-row"
                  slot-scope="{ item }"
                  @click="$router.push(`/jobs/${item.id}`)"
                >
                  <md-table-cell :md-label="$t('jobs.id')"
                    >{{ item.id }}
                  </md-table-cell>
                  <md-table-cell :md-label="$t('jobs.salary')"
                    >{{ item.salary }}
                  </md-table-cell>
                  <md-table-cell :md-label="$t('jobs.workLocation')"
                    >{{ item.work_location }}
                  </md-table-cell>
                  <md-table-cell :md-label="$t('jobs.requiredSkills')"
                    >{{ item.required_skill }}
                  </md-table-cell>
                </md-table-row>
              </md-table>
            </div>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <maps />
      </div>
    </div>
  </div>
</template>

<script>
import JobsRepository from "../domain/jobs/JobsRepository";
import Maps from './Examples/Maps'

export default {
  name: "Jobs",
  components: {
    Maps
  },
  mounted() {
    this.jobsRepository = new JobsRepository();
    this.jobs = this.jobsRepository.getAll();
  },
  data() {
    return {
      jobs: this.jobs || []
    };
  },
  methods: {
    createNew() {
      this.$router.push('/jobs/new')
    }
  }
};
</script>

<style>
.data-table table th {
  background: #4caf50 !important;
}
</style>
