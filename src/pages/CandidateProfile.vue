<template>
    <div class="content">
        <div class="md-layout">

            <div class="md-title" style="font-size: x-large; width: 100%">{{ this.candidate.first_name }} {{
                this.candidate.last_name }}
            </div>
            <div class="md-title" style="width: 100%">
                {{this.candidate.home_address}}
            </div>
            <div
                    class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
                    style="padding: 40px"
            >
                <nav-tabs-card style="width: 100%; height: 100%">
                    <template slot="content" style="height: 100%">
                        <span class="md-nav-tabs-title">{{$t("profile.categories")}}</span>
                        <md-tabs md-sync-route class="md-success" md-alignment="centered">
                            <md-tab id="tab-home" :md-label="$t('candidate.skills')" md-icon="code" md-ali>
                                <md-card style="font-size: x-large; padding: 10px"
                                         v-for="skill in this.candidate.skills.split(',')">
                                    {{ skill }}
                                </md-card>
                            </md-tab>

                            <md-tab id="tab-pages" md-label="Informations" md-icon="info">
                                <md-table>
                                    <md-table-row>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="left">
                                            {{$t('candidate.firstName')}} :
                                        </md-table-cell>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="right">
                                            {{this.candidate.first_name}}
                                        </md-table-cell>
                                    </md-table-row>
                                    <md-table-row>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="left">
                                            {{$t('candidate.lastName')}} :
                                        </md-table-cell>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="right">
                                            {{this.candidate.last_name}}
                                        </md-table-cell>
                                    </md-table-row>
                                    <md-table-row>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="left">
                                            {{$t('candidate.address')}} :
                                        </md-table-cell>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="right">
                                            {{this.candidate.home_address}}
                                        </md-table-cell>
                                    </md-table-row>
                                    <md-table-row>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="left">
                                            {{$t('candidate.overtime')}} :
                                        </md-table-cell>
                                        <md-table-cell style="font-size: x-large; padding: 10px" align="center">
                                            {{this.candidate.willing_to_do_overtime ? '✔' : '𝙓'}}
                                        </md-table-cell>
                                    </md-table-row>
                                    <md-table-row>
                                        <md-table-cell style="font-size: x-large; padding: 10px" md-alignment="left">
                                            {{$t('candidate.relocate')}} :
                                        </md-table-cell>
                                        <md-table-cell style="font-size: x-large; padding: 10px" align="center">
                                            {{this.candidate.willing_to_relocate_to_other_universe ? '✔' : '𝙓'}}
                                        </md-table-cell>
                                    </md-table-row>
                                </md-table>
                            </md-tab>

                            <md-tab id="tab-posts" :md-label="$t('candidate.universe_permits')" md-icon="flight_takeoff">
                                <md-card style="font-size: x-large; padding: 10px"
                                         v-for="universe in this.universes">
                                    {{ universe[Universe] }}
                                </md-card>
                            </md-tab>
                        </md-tabs>
                    </template>
                </nav-tabs-card>
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
    import CandidatesRepository from "../domain/candidates/CandidatesRepository";
    import UniverseRepository from "../domain/universes/UniverseRepository";
    import universes from "../domain/universes/universes";

    export default {
        mounted: function () {
            this.candidateRepository = new CandidatesRepository();
            this.universeRepository = new UniverseRepository();
            this.candidate = this.candidateRepository.getById(this.$route.params.id)
            this.universes = universes;
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
                candidate: null,
                universeRepository: null,
                universes: [],
                dailySalesChart: {
                    data: {
                        labels: ["M", "T", "W", "T", "F", "S", "S"],
                        series: [[12, 17, 7, 17, 23, 18, 38]]
                    },
                    options: {
                        lineSmooth: this.$Chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                dataCompletedTasksChart: {
                    data: {
                        labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
                        series: [[230, 750, 450, 300, 280, 240, 200, 190]]
                    },

                    options: {
                        lineSmooth: this.$Chartist.Interpolation.cardinal({
                            tension: 0
                        }),
                        low: 0,
                        high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
                        chartPadding: {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }
                    }
                },
                emailsSubscriptionChart: {
                    data: {
                        labels: [
                            "Ja",
                            "Fe",
                            "Ma",
                            "Ap",
                            "Mai",
                            "Ju",
                            "Jul",
                            "Au",
                            "Se",
                            "Oc",
                            "No",
                            "De"
                        ],
                        series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        [
                            "screen and (max-width: 640px)",
                            {
                                seriesBarDistance: 5,
                                axisX: {
                                    labelInterpolationFnc: function (value) {
                                        return value[0];
                                    }
                                }
                            }
                        ]
                    ]
                }
            };
        }
    };
</script>
