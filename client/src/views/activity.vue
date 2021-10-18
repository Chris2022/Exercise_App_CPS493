<template>
<!-- <section class="section" id="activity">
    <h1 class="title">Feed</h1>
    <h2 class="subtitle">    
        Whats new ?
    </h2>
    <div class="container">
    <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p id="post">
              <strong>John Smith</strong> <small>@johnsmith</small> <small>23m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>

      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p id="post">
              <strong>Kelly Stoves</strong> <small>@K_Stoves</small> <small>32m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>

      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://images.unsplash.com/photo-1500883255669-0f0d5f87df7d?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wzNjk2MjAwfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p id="post">
              <strong>Jakob Owens</strong> <small>@jakob_owens</small> <small>37m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
      <br><br><br>
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://media.istockphoto.com/photos/beautiful-young-woman-training-with-kettlebell-in-gym-picture-id1265038811?b=1&k=20&m=1265038811&s=170667a&w=0&h=2Tqf5D2X3yeeoBOxtbv7Vxo28r0L64JhVGfICsmmLpM=">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p id="post">
              <strong>Jessica Ross</strong> <small>@jessRoss</small> <small>44m</small>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav class="level is-mobile">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-reply"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-retweet"></i></span>
              </a>
              <a class="level-item">
                <span class="icon is-small"><i class="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div class="media-right">
          <button class="delete"></button>
        </div>
      </article>
</div>
</section> -->
  <div class="section">
      <h1 class="title" id="feed">Feed</h1>
      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
            <div class="post" v-for="p in posts" :key="p.src">
                <post :post="p" />
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import session from "../services/session";
import { GetWall } from "../services/posts";

export default {
  components: { Post },
    data: ()=> ({
        posts: GetWall(session.user.handle)
    })
}
</script>

<style>
#feed{
  text-align: center;
}
</style>