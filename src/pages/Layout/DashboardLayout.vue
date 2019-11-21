<template>
    <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
        <notifications></notifications>

        <side-bar>
            <mobile-menu slot="content"></mobile-menu>
            <sidebar-link to="/">
                <md-icon>home</md-icon>
                <p>Home</p>
            </sidebar-link>
            <sidebar-link to="/user">
                <md-icon>person</md-icon>
                <p>Profile</p>
            </sidebar-link>
            <sidebar-link to="/table">
                <md-icon>table_chart</md-icon>
                <p>Table</p>
            </sidebar-link>
            <sidebar-link to="/typography">
                <md-icon>typography</md-icon>
                <p>typography</p>
            </sidebar-link>
            <sidebar-link to="/icons">
                <md-icon>home</md-icon>
                <p>icons</p>
            </sidebar-link>
            <sidebar-link to="/maps">
                <md-icon>map</md-icon>
                <p>maps</p>
            </sidebar-link>
          <sidebar-link to="/notifications">
            <md-icon>notifications</md-icon>
            <p>notifications</p>
          </sidebar-link>
          <sidebar-link to="/upgrade">
            <md-icon>trending_up</md-icon>
            <p>upgrade</p>
          </sidebar-link>
        </side-bar>

        <div class="main-panel">
            <top-navbar></top-navbar>

            <dashboard-content></dashboard-content>
        </div>
    </div>
</template>
<style lang="scss"></style>
<script>
    import TopNavbar from "./TopNavbar.vue";
    import DashboardContent from "./Content.vue";
    import MobileMenu from "@/pages/Layout/MobileMenu.vue";

    export default {
        components: {
            TopNavbar,
            DashboardContent,
            MobileMenu
        }
    };
</script>
