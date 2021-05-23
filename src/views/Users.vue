<template>
  <div>
    <h1 class="text-2xl text-red-400">{{ title }}</h1>
    <div>
      <table>
        <tbody>
          <tr>
            <td>Nombre</td>
            <td>Cargos</td>
            <td>Sucursales</td>
            <td>Horas/semana</td>
            <td>Numero de identificacion</td>
          </tr>
          <tr v-for="list_user in list_users" :key="list_user.id">
            <td>{{ list_user.firstName }} {{ list_user.lastName }}</td>
            <div
              v-for="list_position in list_positions"
              :key="list_position.name"
            >
              <td v-for="position in list_user.positionId" :key="position">
                {{ position === list_position.id ? list_position.name : '' }}
              </td>
            </div>
            <td v-for="location in list_user.locationId" :key="location">
              <div
                v-for="list_location in list_locations"
                :key="list_location.id"
              >
                {{ location === list_location.id ? list_location.name : '' }}
              </div>
            </td>
            <td></td>
            <td>{{ list_user.employeeId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: 'Vista de Usuarios',
      list_users: null,
      list_positions: null,
      list_locations: null,
    };
  },

  mounted() {
    this.users();
  },

  methods: {
    users() {
      axios
        .get('http://localhost:3004/users')
        .then((users) => {
          console.log(users);
          this.list_users = users.data;
        })
        .catch((e) => console.log(e));

      axios
        .get('http://localhost:3004/positions')
        .then((positions) => {
          console.log(positions.data);
          this.list_positions = positions.data;
        })
        .catch((e) => console.log(e));
      axios
        .get('http://localhost:3004/locations')
        .then((locations) => {
          console.log(locations.data);
          this.list_locations = locations.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
