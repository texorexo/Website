<template>
  <div>
    <header>
      <div class="header-content">
        <img
          class="image-header"
          :src="require('@/assets/images/header-logo.png')"
          alt=""
        />
        <p class="header-title">
          When the fandom
          <span class="text-clip bg-gradient-to-r from-purple-700 to-yellow-500"
            >meets</span
          >.
        </p>
        <p class="header-description">
          Join our growing family with events, a minecraft server, and many more
          special and fun features to come.
        </p>
        <button
          class="text-with-icon-right mt-5"
          @click="toggleJoinModal = !toggleJoinModal"
        >
          <p>Join now</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; -ms-filter: "
            class="button-icon"
          >
            <path
              d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"
            ></path>
          </svg>
        </button>
        <a
          class="text-with-icon-right-transparent mt-5 px-4 py-3 text-lg"
          href="mailto:texo@furrygalaxy.xyz"
        >
          <p>Contact Us</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(255, 255, 255, 1); transform: ; -ms-filter: "
            class="button-icon"
          >
            <path
              d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"
            ></path>
          </svg>
        </a>
      </div>
      <img
        class="image-head-side"
        :src="require('@/assets/images/header-image-side.png')"
        alt=""
      />
    </header>
    <div>
      <div
        class="bg-feature-bg-one flex items-center justify-start mb-12 bg-fixed bg-center bg-cover h-screen"
      >
        Hello doves
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "When the fandom meets",
  },

  data() {
    return {
      toggleJoinModal: false,
    };
  },
};
</script>

<style lang="postcss" scoped>
header {
  @apply bg-hero-header bg-cover bg-no-repeat text-white h-96 flex;
}

.image-head-side {
  @apply hidden xl:block transform h-96 translate-x-32;
}

.image-header {
  @apply w-2/3 mb-5;
}

.header-content {
  @apply px-5 py-5 md:w-1/2;
}

.header-title {
  @apply text-4xl xl:text-5xl mb-5 font-semibold;
}

.header-description {
  @apply mb-3 text-xl xl:text-2xl text-gray-300;
}

button {
  @apply px-8 py-2 text-xl rounded-xl;
  &:hover {
    @apply shadow-2xl duration-200;
  }
  &:focus {
    @apply shadow-inner duration-200;
  }
}

.text-with-icon-right {
  @apply inline-flex items-center bg-purple-800 text-white;
  &:hover svg {
    @apply duration-100 transform translate-x-2;
  }
}

.text-with-icon-right-transparent {
  @apply inline-flex items-center text-white;
  &:hover svg {
    @apply duration-100 transform translate-x-2;
  }
}

.text-clip {
  @apply text-transparent bg-clip-text;
}
</style>

