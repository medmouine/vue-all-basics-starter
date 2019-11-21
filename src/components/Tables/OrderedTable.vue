<template>
    <div>
        <md-table v-model="candidates" :table-header-color="tableHeaderColor">
            <md-table-row slot="md-table-row" slot-scope="{ item }" @click="$router.push({ path: `/candidates/${item.id}` })">
                <md-table-cell md-label="ID" url="/candidate/ad">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.first_name }} {{ item.last_name }}</md-table-cell>
                <md-table-cell md-label="Overtime">{{item.willing_to_do_overtime ? '✔' : '𝙓'}}</md-table-cell>
                <md-table-cell md-label="Relocate">{{item.willing_to_relocate_to_other_universe ? '✔' : '𝙓'}}
                </md-table-cell>
                <md-table-cell md-label="Skills">{{item.skills}}</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>

<script>
    export default {
        name: "ordered-table",
        props: {
            tableHeaderColor: {
                type: String,
                default: ""
            },
            candidates: Array
        },
        data() {
            return {
                selected: [],
            };
        }
    };
</script>
