<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>

    <h3>
      It looks like you're experiencing some network issues, please take a
      breath and <a href="#" @click="$router.go(-1)">click here</a> to try
      again.
      <!--$router.go(-1) : navigte to the previous route  -->
    </h3>
  </div>
</template>
