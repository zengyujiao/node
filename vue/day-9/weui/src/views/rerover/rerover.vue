<template>
    <div>
        <Header>发现</Header>
        <Search></Search>
        <Panel tab="job"></Panel>
        <Tabber :offset="2"/>
    </div>
</template>
<script>
import Header from '../../components/header/header.vue'
import Search from '../../components/search/search.vue'
import Panel from '../../components/panel/panel.vue'
import Tabber from '../../components/tabber/tabber.vue'
export default {
    components:{
        Header,
        Search,
        Panel,
        Tabber
    }    
}

</script>