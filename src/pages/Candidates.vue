<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Job seekers</h4>
            <p class="category">{{ this.candidates.length }} Candidates</p>
          </md-card-header>
          <md-card-content>
            <ordered-table
              table-header-color="orange"
              :candidates="candidates"
            ></ordered-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";
import CandidatesRepository from "@/domain/candidates/CandidatesRepository";

export default {
  mounted: function() {
    this.candidateRepository = new CandidatesRepository();
    this.candidates = this.candidateRepository.getAll();
  },
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
      candidates: []
    };
  }
};
</script>
