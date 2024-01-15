<template>
  <div class="card card-project">
    <h3>{{ project.title }}</h3>
    <p v-if="project.type">{{ project.type.name }}</p>
    <p v-if="project.technologies">{{ project.technologies.name }}</p>
  </div>
</template>

<script>
  export default{
    props: {
      project: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>

.card.card-project{
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: grey;
}
</style>