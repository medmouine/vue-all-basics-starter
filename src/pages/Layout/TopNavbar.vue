<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $t($route.name) }}</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-autocomplete">
            <md-autocomplete
              class="search"
              v-model="selectedEmployee"
              :md-options="employees"
            >
              <label>{{ $t("menu.search") }}</label>
            </md-autocomplete>
          </div>

          <md-menu md-size="small">
            <md-button
              class="md-just-icon md-simple md-icon-button"
              md-menu-trigger
            >
              <span class="material-icons">language</span>
            </md-button>
            <md-menu-content>
              <md-menu-item @click="() => changeLanguage('fr')">
                <flag iso="ca" class="flag" />
                <div style="margin-left: 15px">Français</div>
              </md-menu-item>

              <md-menu-item @click="() => changeLanguage('en')">
                <flag iso="us" class="flag" />
                <div style="margin-left: 15px">English</div>
              </md-menu-item>
            </md-menu-content>
          </md-menu>

          <!-- Logged-in -->
          <md-menu v-if="loggedIn">
            <md-button
              class="md-just-icon md-simple md-icon-button"
              md-menu-trigger
            >
              <span class="material-icons">person</span>
            </md-button>

            <md-menu-content>
              <div class="author-card">
                <md-avatar class="md-large md-avatar">
                  <img
                    src="https://png.pngtree.com/svg/20170602/0db185fb9c.png"
                    class="md-avatar"
                  />
                </md-avatar>

                <div class="author-card-info">
                  <span>Sunny Pelletier</span>
                  <div class="author-card-links">
                    <a
                      href="https://gitlab.com/pelletier197"
                      target="_blank"
                      rel="noopener"
                      >GitLab</a
                    >
                  </div>
                </div>
              </div>
            </md-menu-content>
          </md-menu>

          <!-- Logged-out -->
          <md-menu v-else>
            <md-button
              class="md-just-icon md-simple md-icon-button"
              md-menu-trigger
            >
              <span class="material-icons">perm_identity</span>
            </md-button>

            <md-menu-content>
              <div class="author-card">
                <div class="author-card-info">
                  <!-- Log in -->
                  <label>{{ $t("login.login") }}</label>
                  <form>
                    <md-field>
                      <label>{{ $t("login.username") }}</label>
                      <md-input
                        v-model="username"
                        type="email"
                        name="uname"
                      ></md-input>
                    </md-field>
                    <md-field :md-toggle-password="false">
                      <label>{{ $t("login.password") }}</label>
                      <md-input
                        v-model="password"
                        type="password"
                        name="pwd"
                      ></md-input>
                    </md-field>
                    <div class="md-layout">
                      <md-button class="md-layout-item md-size-100 md-primary"
                        >{{ $t("login.signin") }}
                      </md-button>
                    </div>
                  </form>
                  <md-divider class="separator" />

                  <label>{{ $t("login.new_to_website") }}</label>
                  <md-button class="md-secondary"
                    >{{ $t("login.signup") }}
                  </md-button>
                </div>
              </div>
            </md-menu-content>
          </md-menu>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
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
      loggedIn: false,
      username: "",
      password: ""
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
    }
  }
};
</script>

<style lang="css">
.md-field {
  margin-bottom: 10px;
}

.author-card {
  padding: 8px 16px;
  display: flex;
  align-items: center;
}

.md-avatar {
  margin-right: 8px !important;
  width: 60px !important;
  height: auto !important;
}

.author-card-info {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.separator {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

  .flag {
    margin: 0 10px 0 10px;
  }
</style>
