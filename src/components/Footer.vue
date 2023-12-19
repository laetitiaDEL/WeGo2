<template>
    <footer>
        <nav class="navbar navbar-expand-lg p-1">
            <div class="container-fluid">
                <router-link to="/"><img src="../assets/logoFooter.svg"></router-link>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link to="/home" class="nav-link" aria-current="page" href="#">Accueil</router-link>
                        <router-link to="/history" class="nav-link" href="#">Mes sorties passées</router-link>
                        <router-link to="/createOuting" class="nav-link" href="#">Créer une sortie</router-link>
                        <router-link to="/messaging" class="nav-link" href="#">Messages</router-link>
                        <router-link to="/myAccount" class="nav-link" href="#">Mon compte</router-link>
                        <router-link to="/settings" class="nav-link" href="#">Paramètres</router-link>
                        <router-link to="/terms" class="nav-link" href="#">Conditions générales</router-link>
                        <router-link to="/privacy" class="nav-link" href="#">Confidentialité</router-link>
                        <router-link to="/contact" class="nav-link" href="#">Contact</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </footer>
</template>

<script lang="js">
    export default{
        name: "Footer"
    }
</script>