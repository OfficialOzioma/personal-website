<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "Techonologies I have worked with",
      clients: [
        {
          id: 1,
          title: "PHP",
          img: require("@/assets/images/brands/php_gray.png"),
        },
        {
          id: 2,
          title: "Laravel",
          img: require("@/assets/images/brands/laravel_gray.png"),
        },
        {
          id: 3,
          title: "Javascript",
          img: require("@/assets/images/brands/javascript_gray.png"),
        },
        {
          id: 4,
          title: "NodeJs",
          img: require("@/assets/images/brands/node_gray.png"),
        },
        {
          id: 5,
          title: "Mysql",
          img: require("@/assets/images/brands/mysql_gray.png"),
        },
        {
          id: 6,
          title: "MongoDB",
          img: require("@/assets/images/brands/mongodb_gray.png"),
        },
        {
          id: 7,
          title: "Docker",
          img: require("@/assets/images/brands/docker_gray.png"),
        },
        {
          id: 7,
          title: "GraphQL",
          img: require("@/assets/images/brands/linux_gray.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
      <AboutClientSingle
        v-for="client in clients"
        :key="client.id"
        :client="client"
      />
    </div>
  </div>
</template>
