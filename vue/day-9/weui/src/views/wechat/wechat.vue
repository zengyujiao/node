<template>
    <div>
        <Header>微信</Header>
        <Search></Search>
        <Panel tab="ask"></Panel>
        <Tabber :offset="0"/>
        <Gallery/>
    </div>
</template>
<script>
import Header from '../../components/header/header.vue'
import Search from '../../components/search/search.vue'
import Panel from '../../components/panel/panel.vue'
import Tabber from '../../components/tabber/tabber.vue'
import Gallery from '../../components/gallery/gallery.vue'
export default {
    components:{
        Header,
        Search,
        Panel,
        Tabber,
        Gallery
    }    
}

</script>