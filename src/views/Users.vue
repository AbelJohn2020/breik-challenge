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
    },
  },
};
</script>
