<template>
    <div>
        <Header>我</Header>
        <Search></Search>
        <Panel tab="good"></Panel>
        <Tabber :offset="3"/>
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