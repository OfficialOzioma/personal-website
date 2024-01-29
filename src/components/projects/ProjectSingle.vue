<script>
export default {
  props: ["project"],

  data() {
    return {
      link: this.project.link,
    };
  },
};
</script>

<template>
  <section
    class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
    aria-label="Single Project"
  >
    <div>
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-t-xl border-none aspect-[4/3]"
      />
    </div>
    <div class="text-center px-4 py-6">
      <p
        class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
      >
        {{ project.title }}
      </p>
      <hr />
      <span
        class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
        >{{ project.category }}</span
      >
      <hr />
      <p
        class="m-2 font-general-medium text-lg text-justify text-ternary-dark dark:text-ternary-light"
      >
        {{ project.description }}
      </p>
      <span>
        <a
          :href="link"
          target="_blank"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Link to project &nbsp;
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
