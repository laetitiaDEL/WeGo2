<template>
    <header>
        <nav class="navbar navbar-expand-lg p-1">
            <div class="container-fluid">
                <router-link to="/"><img src="../assets/logoHeader.svg"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav">
                        <router-link to="/home" class="nav-link" aria-current="page" href="#">Accueil</router-link>
                        <router-link to="/history" class="nav-link" href="#">Mes sorties passées</router-link>
                        <router-link to="/createOuting" class="nav-link" href="#">Créer une sortie</router-link>
                        <router-link to="/messaging" class="nav-link" href="#">Messages</router-link>
                        <router-link to="/myAccount" class="nav-link" href="#">Mon compte</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="js">
    export default{
        name: "Header"
    }
</script>