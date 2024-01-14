<template> 
    <div class="container-fluid">
        <div class="row border-dark">
            <div class="col-md-6 p-0">
                <!--
                    <map>
                      Définir la carte
                      <l-map :center="mapCenter" :zoom="mapZoom">
                            <l-tile-layer :url="tileLayerUrl"></l-tile-layer>
                            Ajouter un marqueur à la carte
                            <l-marker :lat-lng="markerCoordinates"></l-marker>
                        </l-map>
                    </map>
                -->
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
                <div class="bg-pink p-4 absolute">
                    <h2 class="peach-cake">J'ai mis mes baskets, je crée ma sortie !</h2>
                    <div class="spacer-mini"></div>
                    <p>Envie d’une séance de sport intense, ou d’une balade tranquille ? Running, football, musculation, vélo, promenade de chiens... trouve des personnes qui aiment bouger !</p>
                </div>
            </div>
            <div class="col-lg-6 p-0 relative mb-3 order-lg-1 img-deco">
                    <img src="/src/assets/homeDeco.png">
            </div>
        </div>
        <div class="row">
            <div class="spacer"></div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row w80">
            <div class="col-12 p-0 relative listParent">
                <div class="listeFuture bg-darkblue light p-5">
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

</template>



<script>
export default {
  components: {
    'l-map': window.Vue2Leaflet.LMap,
    'l-tile-layer': window.Vue2Leaflet.LTileLayer,
    'l-l-marker': window.Vue2Leaflet.LMarker,
  },
  data(){
        return{
            /*mapCenter: [48.858844, 2.294351], // Coordonnées du centre de la carte
            mapZoom: 15, // Niveau de zoom initial
            tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // URL de la couche de tuiles OpenStreetMap
            markerCoordinates: [48.858844, 2.294351], // Coordonnées du marqueur sur la carte*/

            /*iconsURL:{
                promenadeChien: "/src/assets/Dog.png",
                football: "/src/assets/SoccerBall.png",
                basketball: "/src/assets/Basketball.png",
                running: "src/assets/RunningShoe.png"
            },*/

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
    }
    /*methods:{
        calcIconURL(sortie){
            const leType = sortie.type;
            const url = this.iconsURL.$leType;
            console.log(url);
            return url;
        }
    }*/
}
</script>