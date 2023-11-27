<script>
export default {
  data() {
    return {
      people: [
        {id: 1, person: 'Rahimov', infidelityRisk: 80},
        {id: 2, person: 'Amonov', infidelityRisk: 50},
        {id: 3, person: 'Azizov', infidelityRisk: 20},
        {id: 4, person: 'Yusupov', infidelityRisk: 65},
      ]
    }
  }
}



</script>

<template>
  <ul>
    <li v-for="person in people" :key="person.id" :title="person.person">
      {{ person.person }} - risk of infidelity is {{ person.infidelityRisk }} %
    </li>
  </ul>
</template>