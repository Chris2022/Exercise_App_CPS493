<template>
  <div class="section">
    <h1 class="title animate__animated animate__zoomIn">Food Log!</h1>
    <h2 class="subtitle">View all your food logs here!</h2>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div v-for="p in list" :key="p">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <div class="box">
                  <div class="media-content">
                    <p class="title is-4">Food for {{p.handle}} was logged on {{ p.day }}:</p>
                  </div>
                  <table>
                    <tr>
                      <th>Food Name:</th>
                      <td>{{ p.name }}</td>
                    </tr>
                    <tr>
                      <th>Drink Name:</th>
                      <td>{{ p.drink }}</td>
                    </tr>
                    <tr>
                      <th>Calorie Amount: </th>
                      <td>{{ p.amount }} cal</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetByHandle } from "../services/Food";
import session from "../services/session";

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.list = await GetByHandle(session.user.handle);
  },
};
</script>