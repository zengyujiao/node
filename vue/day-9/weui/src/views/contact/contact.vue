<template>
  <div>
    <Header>通讯录</Header>
    <Search />
    <Panel tab="share"></Panel>
    <Tabber :offset="1" />
  </div>
</template>
<script>
import Header from "../../components/header/header.vue"
import Search from "../../components/search/search.vue"
import Panel from "../../components/panel/panel.vue"
import Tabber from "../../components/tabber/tabber.vue"
export default {
  components: {
    Header,
    Search,
    Panel,
    Tabber
  }
};
</script>