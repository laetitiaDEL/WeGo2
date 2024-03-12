<template> 
    <div v-if="connected==true">
        <div class="container-fluid">
            <div class="row border-dark">
                <div class="col-md-6 p-0">
                        <l-map ref="map" v-model:zoom="zoom" :center="[43.552, 1.4869]">
                        <l-tile-layer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            layer-type="base"
                            name="OpenStreetMap">
                        </l-tile-layer>
                        </l-map>
                </div>
                <div class="col-md-6 p-0">
                    <div class="listeActuelle bg-darkblue light p-4">
                        <h2 class="peach-cake">Ils ont déjà mis leurs baskets ! On sort ?</h2>
                        <article class="bg-blue d-flex justify-content-between m-2 p-2 border-dark" v-for="sortie in listeActuelle">
                            <div class="sortieContainer d-flex">
                                <aside class="d-flex">
                                    <img class="outingPP" v-bind:src="sortie.ppURL">
                                    <div class="icons d-flex flex-column justify-content-center">
                                        <img v-bind:src="sortie.iconURL">
                                        <img src="/src/assets/marker-02.png">
                                    </div>
                                </aside>
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="bg-blue m-0">{{ sortie.user }} {{ sortie.nombre ? "+"+sortie.nombre+" autres" : sortie.animal ? "& "+sortie.animal.nom : "" }}</h6>
                                    <p class="m-0">Près de {{ sortie.lieu }}</p>
                                </div>
                            </div>
                            <div class="buttons d-flex flex-column">
                                <button class="btn btn-outline-primary btn-sm">DETAILS</button>
                                <button class="btn btn-primary btn-sm">CONTACTER</button>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="spacer"></div>
            </div>
            <div class="row w80 m-auto">
                <div class="col-lg-6 light relative mt-3 order-lg-2 pinkSquare">
                    <div class="bg-pink p-4 absolute blue-shadow">
                        <div class="spacer-mini"></div>
                        <div class="spacer-mini"></div>
                        <p>Envie d’une séance de sport intense, ou d’une balade tranquille ? Running, football, musculation, vélo, promenade de chiens... trouve des personnes qui aiment bouger !</p>
                        <router-link to="/createOuting" class="nav-link" href="#"><button class="btn btn-primary btn-sm">CRÉER UNE SORTIE</button></router-link>
                    </div>
                </div>
                <div class="col-lg-6 p-0 relative mb-3 order-lg-1 img-deco">
                        <img src="/src/assets/homeDeco.png">
                        <h2 class="peach-cake relative light" style="top: -70%; left: 60%">J'ai mis mes baskets, je crée ma sortie !</h2>
                </div>
            </div>
            <div class="row">
                <div class="spacer"></div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row w80">
                <div class="col-12 p-0 relative listParent">
                    <div class="listeFuture bg-darkblue light p-5 blue-shadow">
                        <h2 class="peach-cake">C'est pour bientôt à Ramonville !</h2>
                        <h2 class="peach-cake">On rejoint une sortie programmée ?</h2>
                        <article class="bg-blue d-flex justify-content-between m-2 p-2 border-dark" v-for="sortie in listeActuelle">
                            <div class="sortieContainer d-flex">
                                <aside class="d-flex">
                                    <img class="outingPP" v-bind:src="sortie.ppURL">
                                    <div class="icons d-flex flex-column justify-content-center">
                                        <img v-bind:src="sortie.iconURL">
                                        <img src="/src/assets/marker-02.png">
                                    </div>
                                </aside>
                                <div class="d-flex flex-column justify-content-center">
                                    <h6 class="bg-blue m-0">{{ sortie.user }} {{ sortie.nombre ? "+"+sortie.nombre+" autres" : sortie.animal ? "& "+sortie.animal.nom : "" }}</h6>
                                    <p class="m-0">Près de {{ sortie.lieu }}</p>
                                </div>
                            </div>
                            <div class="buttons d-flex flex-column">
                                <button class="btn btn-outline-primary btn-sm">DETAILS</button>
                                <button class="btn btn-primary btn-sm">CONTACTER</button>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
        </div>
    </div>

    <section style="background-color: #3A4369; height: 100vh;" v-else>
        <div class="container m-auto" style="height: 100%;">
            <div class="row d-flex justify-content-center align-items-center" style="height: 100%;">
                <div class="col col-xl-10">
                    <div class="card" id="connexion" style="border-radius: 1rem;">
                        <div class="row g-0">
                            <div class="col-lg-8 d-none d-lg-block">
                                <img src="/src/assets/homeDeco_Copie.png"
                                alt="login form" style="border-radius: 1rem 0 0 1rem; height: 100%; width: auto" />
                            </div>
                            <div class="col-12 col-lg-4 d-flex align-items-center">
                                <div class="card-body p-2 p-lg-3 text-black">

                                    <form>
                                        <div class="d-flex align-items-center mb-3 pb-1">
                                            <img src="../assets/logo_white.png" style="width: 50%; height: auto">
                                        </div>

                                        <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Connexion</h5>

                                        <div class="form-outline mb-4">
                                            <input v-model="email" type="email" id="form2Example17" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example17">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input v-model="password" type="password" id="form2Example27" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example27">Mot de passe</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button v-on:click="signIn" class="btn btn-dark btn-lg btn-block" type="button">Entrer</button>
                                        </div>

                                        <a class="small text-muted" href="#!">Mot de passe oublié ?</a>
                                        <p style="color: #393f81;">Pas encore de compte ? <a href="#!"
                                            style="color: #393f81;">S'inscrire</a></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import firebase from 'firebase';
import router from '../router';
export default {
    name: "home",
    components: {
        LMap,
        LTileLayer,
    },
    
    data(){
        return{
            email: "",
            password: "",
            connected: false,

            zoom: 15,

            listeActuelle:[
                {
                    type: "promenadeChien",
                    iconURL: "/src/assets/Dog.png",
                    user: "Thomas U.",
                    ppURL: "/src/assets/thomas.png",
                    lieu: "Canal du midi",
                    animal:
                        {
                            nom: "Ruby",
                            race: "Border Collie",
                            age: "6 mois"
                        }
                },
                {
                    type: "football",
                    iconURL: "/src/assets/SoccerBall.png",
                    user: "Iliana J.",
                    ppURL: "/src/assets/iliana.png",
                    lieu: "Canal du midi",
                    nombre: 6
                },
                {
                    type: "promenadeChien",
                    iconURL: "/src/assets/Dog.png",
                    user: "Marina N.",
                    ppURL: "/src/assets/marina.png",
                    lieu: "Canal du midi",
                    animal:
                        {
                            nom: "Pixel",
                            race: "Beagle",
                            age: "2 ans"
                        }
                },
                {
                    type: "basketball",
                    iconURL: "/src/assets/Basketball.png",
                    user: "Ethan F.",
                    ppURL: "/src/assets/ethan.png",
                    lieu: "Canal du midi",
                    nombre: 4
                },
                {
                    type: "running",
                    iconURL: "/src/assets/RunningShoe.png",
                    user: "Anthony B.",
                    ppURL: "/src/assets/anthony.png",
                    lieu: "Canal du midi"
                }
            ]
        }
    },
    methods: {
        signIn() { 
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password) 
                .then((data) => {
                    console.log('Successfully logged in!');
                    router.push('/')
                })
                .catch(error => {
                    console.log(this.email);
                    console.log(error);
                });
        }
    },

    created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.connected = true; // si nous avons un utilisateur connecté
        router.push('/');
      } else {
        this.connected = false; // si nous n'avons pas d'utilisateur connecté
      }
    });
  }
}
</script>

<style scoped>
    #connexion{
        background-color: #FCFAEE;
    }
</style>