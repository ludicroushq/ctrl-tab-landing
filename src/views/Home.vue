<template>
  <div class="home">
    <div
      v-if="productHunt"
      class="notification product-hunt is-warning has-text-centered has-text-white"
    >
      <strong>Hello Product Hunters!</strong>
      Don't forget to check out the Product Hunt feed in the extension
      to stay up to date with the latest posts!
    </div>
    <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                ludicrous tab.
              </h1>
              <h2 class="subtitle">
                replace your new tab page with the data that matters to you
              </h2>
              <div class="columns">
                <div class="column">
                  <a
                    href="https://chrome.google.com/webstore/detail/tab/ijfnjhlohbehhlhhokgokabonpnlldon"
                    class="button is-fullwidth is-outlined is-medium is-success"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'chrome']" />
                    </span>
                    <span>Install Chrome Extension</span>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://addons.mozilla.org/en-US/firefox/addon/ludicrous-tab"
                    class="button is-fullwidth is-outlined is-medium is-warning"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'firefox']" />
                    </span>
                    <span>Install Firefox Add-on</span>
                  </a>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <a
                    href="https://github.com/ludicrousxyz/tab"
                    class="button is-fullwidth is-outlined"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </span>
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <img src="https://raw.githubusercontent.com/ludicrousxyz/tab/master/public/img/banner.png" width="75%">
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column">
              <div class='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
                <div class='carousel-container'>
                  <div class='carousel-item has-background is-active'>
                    <img class="is-background" src="https://raw.githubusercontent.com/ludicrousxyz/tab/develop/public/img/chrome/traditional.png" />
                  </div>
                  <div class='carousel-item has-background'>
                    <img class="is-background" src="https://raw.githubusercontent.com/ludicrousxyz/tab/develop/public/img/chrome/tech.png" />
                  </div>
                  <div class='carousel-item has-background'>
                    <img class="is-background" src="https://raw.githubusercontent.com/ludicrousxyz/tab/develop/public/img/chrome/screenshot.png" />
                  </div>
                </div>
                <div class="carousel-navigation is-overlay">
                  <div class="carousel-nav-left">
                    <font-awesome-icon :icon="['fas', 'chevron-left']" />
                  </div>
                  <div class="carousel-nav-right">
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <h1 class="title">
                infinite customization
              </h1>
              <h2 class="subtitle">
                set up and organize the page how <strong>you</strong> want
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h1 class="title">
              20+ providers
            </h1>
            <h2 class="subtitle">
              choose the news/data providers that are relevant to you
            </h2>
          </div>
          <div class="column">
            <div class="columns is-vcentered">
              <div class="column is-one-quarter">
                <aside class="menu">
                  <p class="menu-label">
                    Categories
                  </p>
                  <ul class="menu-list">
                    <li
                      v-for="category in this.categories"
                      :key="category"
                    >
                      <a
                        @click="selectCategory(category)"
                        :class="{ 'is-active': currentCategory === category }"
                      >
                        {{ category }}
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="column">
                <table class="table is-striped is-bordered is-fullwidth is-narrow">
                  <tbody>
                    <tr v-for="provider in this.providers[this.currentCategory]" :key="provider">
                      <td class="has-text-centered">{{ provider }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                so what are you waiting for?
              </h1>
              <h2 class="subtitle">
                install the extension now!
              </h2>
              <div class="columns">
                <div class="column">
                  <a
                    href="https://chrome.google.com/webstore/detail/tab/ijfnjhlohbehhlhhokgokabonpnlldon"
                    class="button is-fullwidth is-outlined is-medium is-success"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'chrome']" />
                    </span>
                    <span>Install Chrome Extension</span>
                  </a>
                </div>
                <div class="column">
                  <a
                    href="https://addons.mozilla.org/en-US/firefox/addon/ludicrous-tab"
                    class="button is-fullwidth is-outlined is-medium is-warning"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span class="icon">
                      <font-awesome-icon :icon="['fab', 'firefox']" />
                    </span>
                    <span>Install Firefox Add-on</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import bulmaCarousel from '../../node_modules/bulma-carousel/dist/js/bulma-carousel';

export default {
  name: 'home',
  data() {
    return {
      providers: {},
      categories: [],
      currentCategory: '',
      productHunt: false,
    };
  },
  methods: {
    selectCategory(name) {
      this.currentCategory = name;
    },
  },
  async created() {
    if (this.$route.query.ref) {
      this.productHunt = true;
    }
    const req = await fetch('https://api.tab.ludicrous.xyz/v2/providers');
    const { providers } = await req.json();
    const categories = {};
    providers.forEach((provider) => {
      const { category } = provider;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(provider.name);
    });
    this.providers = categories;
    const sortedCategories = Object.keys(categories);
    sortedCategories.sort((a, b) => categories[b].length - categories[a].length);
    this.categories = sortedCategories;
    [this.currentCategory] = this.categories;
  },

  mounted() {
    bulmaCarousel.attach();
  },
};
</script>

<style lang="scss" scoped>
.product-hunt {
  background-color: #da552f;
}
</style>
