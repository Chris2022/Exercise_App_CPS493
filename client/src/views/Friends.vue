<template>
<section class="section">
    <h1 class="title">Friends</h1>
    <h2 class="subtitle">
        Meet new Friends , or view existing ones.
    </h2>
    <div id="tabs-with-content">
        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth is-medium">
                    <div class="container">
                      <ul>
                        <li class="tab is-active" onclick="openTab(event,'friends')"><a >Friends</a></li>
                        <li class="tab " onclick="openTab(event,'requests')"><a >Requests</a></li>
                        <li class="tab" onclick="openTab(event,'discover')"><a >Discover</a></li>
                      </ul>
                    </div>
                  </nav>
              </div>
        <div>
        <div class="content-tab" style="display: none;" id="friends">
            <ul class="friendsList">
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1599058917727-824293170100?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Omar Ruiz</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1445384763658-0400939829cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Amanda Scott</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1579722819442-cc3aa1b7e901?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Ana Strong</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Andrew Hill</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1591089627083-d9d049d833f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Trevor Pizaro</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1616271049250-02a7697e99ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQwfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Connor Ruter</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
                <li>          <article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1540582093410-c06370c89515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Alexi Romano</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">View Profile</button>
    
                          </div>
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
                  </article></li>
            </ul>
        </div>
        <div class="content-tab" style= "display: none;" id="requests">
            <ul class="friendsList">
                <li><article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://media.istockphoto.com/photos/beautiful-young-woman-training-with-kettlebell-in-gym-picture-id1265038811?b=1&k=20&m=1265038811&s=170667a&w=0&h=2Tqf5D2X3yeeoBOxtbv7Vxo28r0L64JhVGfICsmmLpM=">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Jessica Ross</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">Accept</button>
                            <button class="button is-light">Decline</button>
                          </div>
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
                  </article></li>
                <li><article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://media.istockphoto.com/photos/holding-weight-and-sitting-picture-id1277242852?b=1&k=20&m=1277242852&s=170667a&w=0&h=JRJsVDFKO_i9omBAMNySqCfwvRTB-yeVrjJY2jd7JZw=">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Andrew Harris</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">Accept</button>
                            <button class="button is-light">Decline</button>
                          </div>
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
                  </article></li>
            </ul>
        </div>
        <div class="content-tab" style="display: none;" id="discover">
            <ul class="friendsList">
                <li><article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://media.istockphoto.com/photos/mature-woman-walking-at-sunset-carrying-a-mobile-phone-picture-id1278449921?b=1&k=20&m=1278449921&s=170667a&w=0&h=pru_eZz8u5mCUAnNYIoBiM6rPaMkYyda5jEoP19Hyho=">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Stacy Lewis</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">Add</button>
                          </div>
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
                  </article></li>
                <li><article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1518605360659-2aa9659ef66d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Trinity Sinclair</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">Add</button>
            
                          </div>
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
                  </article></li>
                <li><article class="media">
                    <figure class="media-left">
                      <p class="image is-128x128">
                        <img src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                      </p>
                    </figure>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>Luis Alvarez</strong>
                          <br>
                        </p>
                        <div class="buttons">
                            <button class="button is-link">Add</button>
    
                          </div>
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
                  </article></li>
                  <li>
                    <article class="media">
                        <figure class="media-left">
                          <p class="image is-128x128">
                            <img src="https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHxmaXRuZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60">
                          </p>
                        </figure>
                        <div class="media-content">
                          <div class="content">
                            <p>
                              <strong>Anastase Margos</strong>
                              <br>
                            </p>
                            <div class="buttons">
                                <button class="button is-link">Add</button>
        
                              </div>
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
                      </article>
                  </li>
            </ul>
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {

}
</script>

<style>

</style>