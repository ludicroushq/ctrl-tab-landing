<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <h1 class="title">
                ludicrous tab
              </h1>
              <h2 class="subtitle">
                ...is an extension that shows the data that matters to you in your new tab page.
              </h2>
              <div class="columns">
                <div class="column">
                  <a href="https://chrome.google.com/webstore/detail/tab/ijfnjhlohbehhlhhokgokabonpnlldon" class="button is-medium is-fullwidth is-info" target="_blank" rel="noopener noreferrer">View on Chrome Store</a>
                </div>
                <div class="column">
                  <a
                    class="button is-medium is-fullwidth is-success"
                    onclick="chrome.webstore.install()"
                  >
                    Install Extension
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <img src="https://raw.githubusercontent.com/ludicrousxyz/tab/master/public/img/banner.png">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>
