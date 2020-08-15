<template>
  <div>
    <SearchBar></SearchBar>
    <div>
      <template v-if="isLoading">
        Loading..
      </template>
      <template v-else>
        <ul>
          <a href="javascript:;" @click="selectAllContents">전체 보기</a>
          <PcontentButton
            v-for="pcontentName in pcontentNames"
            :key="pcontentName.ctid"
            :pcontentName="pcontentName"
            @filterContent="contentFilter"
          ></PcontentButton>
        </ul>
        <ul>
          <PcontentsList
            v-for="pcontentInfo in pcontentsInfo"
            :key="pcontentInfo.pcid"
            :pcontentInfo="pcontentInfo"
          ></PcontentsList>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import PcontentButton from '@/components/pcontents/PcontentButton.vue';
import PcontentsList from '@/components/pcontents/PcontentsList';
import { fetchPcontents } from '@/api';

export default {
  components: {
    SearchBar,
    PcontentButton,
    PcontentsList,
  },
  data() {
    return {
      pcontentsInfoAll: [],
      isLoading: false,
      logMessage: '',
      pcontentNames: [],
      ctid: null,
    };
  },
  computed: {
    pcontentsInfo: function() {
      if (!this.ctid) {
        return this.pcontentsInfoAll;
      } else {
        return this.pcontentsInfoAll.filter(
          pcontentInfo => pcontentInfo.ctid === this.ctid,
        );
      }
    },
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPcontents(this.$route.params.ptid);
      this.isLoading = false;
      this.pcontentsInfoAll = data.pcontentsInfo;
      // console.log(this.pcontentsInfoAll);
      // console.log(data.pcontentsInfo);
      this.pcontentsInfoAll.forEach(pcontentInfo => {
        this.pcontentNames.push({
          ctid: pcontentInfo.ctid,
          contentName: pcontentInfo.content.ctname,
        });
      });
    },
    contentFilter(ctid) {
      this.ctid = ctid;
    },
    selectAllContents() {
      this.ctid = null;
    },
  },
  created() {
    console.log('PcontentsPage.vue created');
    this.fetchData();
  },
};
</script>
<style></style>
