<template>
  <div class="section">
    <h1 class="title animate__animated animate__zoomIn">Exercise Feed</h1>
    <h2 class="subtitle">View what your friends have completed!</h2>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div v-for="p in list" :key="p.handle">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <div class="box">
                  <div class="media-content">
                    <p class="title is-4">{{ p.handle}} completed this workout on  {{p.date}}:</p>
                  </div>
                  <table>
                    <tr>
                      <th>Name:</th>
                      <td>{{ p.name }}</td>
                    </tr>
                    <tr>
                      <th>Distance:</th>
                      <td>{{ p.distance }} miles</td>
                    </tr>
                    <tr>
                      <th>Calories:</th>
                      <td>{{ p.calories }}</td>
                    </tr>
                    <tr>
                      <th>Time Lapsed: </th>
                      <td>{{ p.time }} min</td>
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
import { GetAll } from "../services/workout";

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    this.list = await GetAll();
  },
};
</script>