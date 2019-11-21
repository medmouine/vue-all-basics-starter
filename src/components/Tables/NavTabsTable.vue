<template>
  <div>
    <md-table v-model="skill" @md-selected="onSelect">
      <md-table-row
        slot="md-table-row"
        slot-scope="{ candidate }"
        md-selectable="multiple"
        md-auto-select
      >
        <md-table-cell>{{ candidate.first_name }}</md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "nav-tabs-table",
  props: {
    skills: []
  },
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
