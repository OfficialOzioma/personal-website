<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: "I am an enthusiastic Software Engineer fueled by a relentless growth mindset. Imagine building a beautiful bridge, except it's made of codes instead of bricks! That's kind of what I do as a software engineer. I use my creativity and technical expertise to design and build software solutions that connect people and solve problems. For the past four years, I've been helping businesses achieve their goals through intuitive software experiences and innovative technology. My journey in problem-solving extends beyond the mere lines of code; it encompasses a commitment to enhancing user experiences and achieving strategic business objectives through the adept use of cutting-edge technology tools.",
        },
        {
          id: 2,
          bio: "Currently immersed in the realms of AI and Cloud computing, I am on a quest to unravel the limitless possibilities these domains hold. My diverse palette of interests spans the technological spectrum, from web programming to the intricacies of Cloud Computing, all underscored by a fervor for innovation.",
        },
        {
          id: 3,
          bio: "Beyond the binary realm, my passions transcend into the world of sports and gaming. As a proud member of the local football team, I've triumphed in securing three trophies—a profoundly enlightening experience that harmoniously coexists with my tech-driven pursuits.",
        },
        {
          id: 4,
          bio: "In this intricate dance between coding and playing, I have found a harmonious balance that defines my professional and personal ethos. Whether on the virtual field of programming or the physical pitch of football, I thrive in the pursuit of excellence.",
        },
        {
          id: 5,
          bio: "For a closer look at my endeavors, feel free to explore my portfolio by clicking the button above. If you wish to connect, don't hesitate to reach out through any of the social links below. Let's embark on this exciting journey of technology, innovation, and shared experiences. Say hello!",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/profile1.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>
