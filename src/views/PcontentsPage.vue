<template>
  <div>
    <SearchBar></SearchBar>
    <div class="app-body">
      <div class="cards">
        <template v-if="isLoading">
          Loading..
        </template>
        <template v-else>
          <div class="cards-header">
            <div class="cards-header-items">
              <a href="javascript:;" @click="selectAllContents">
                <div class="cards-header-item">
                  전체보기
                </div>
              </a>
              <PcontentButton
                v-for="pcontentName in pcontentNames"
                :key="pcontentName.ctid"
                :pcontentName="pcontentName"
                @filterContent="contentFilter"
              ></PcontentButton>
            </div>
          </div>
          <div class="cards-body">
            <PcontentsList
              v-for="pcontentInfo in pcontentsInfo"
              :key="pcontentInfo.pcid"
              :pcontentInfo="pcontentInfo"
            ></PcontentsList>
          </div>
        </template>
      </div>
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
<style>
.cards-header {
  margin: 80px auto 0px;
}

.cards-header-items {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 120px;
}
.cards-header-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin: 10px 10px 15px;
  box-sizing: border-box;
  position: relative;
  background-color: rgba(225, 106, 0, 0.8);
  border-radius: 10px;
  color: #ffffff;
  -webkit-box-shadow: 0 0px 5px 0px rgba(225, 106, 0, 0.75);
}

.cards-body {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px 10px;
  grid-auto-rows: 280px;
}
</style>
