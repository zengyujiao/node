<template>
    <div>
        <Header>微信</Header>
        <Search></Search>
        <Panel></Panel>
    </div>
</template>
<script>
import Header from '../../comp/header/header.vue';
import Search from '../../comp/search/search.vue';
import Panel from '../../comp/panel/panel.vue';
export default {
    components:{
        Header,
        Search,
        Panel
    }    
}

</script>