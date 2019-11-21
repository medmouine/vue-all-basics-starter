<template>
  <ul class="nav nav-mobile-menu">
    <li>
      <md-field>
        <label>{{ $t("menu.search") }}</label>
        <md-input v-model="search" type="text"></md-input>
      </md-field>
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">person</i>
          <p>{{ $t("menu.profile") }}</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <a href="#"><md-icon>settings</md-icon>{{ $t("menu.settings") }}</a>
          </li>
        </ul>
      </drop-down>
    </li>
    <li>
      <drop-down>
        <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
          <i class="material-icons">language</i>
          <p>{{ $t("menu.language") }}</p>
        </a>
        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <a href="#" @click="() => setLanguage('fr')"
              ><md-icon><flag iso="ca"/></md-icon> Français
            </a>
          </li>
          <li>
            <a href="#" @click="() => setLanguage('en')"
            ><md-icon><flag iso="us"/></md-icon> English
            </a>
          </li>
        </ul>
      </drop-down>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      search: null,
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ],
      loggedIn: false
    };
  },
  methods: {
    setLanguage(lang) {
      this.$i18n.locale = lang;
    }
  }
};
</script>
