<template>
  <div>
    <SearchBar></SearchBar>
    <div class="app-body">
      <template v-if="isLoading">
        Loading..
      </template>
      <template v-else>
        <div class="wrap">
          <div class="jumbotron">
            <h1>FAST</h1>
            <p class="desc">
              Patients can rehabiltate their upper limbs using embeded devices
              with VR contents by this service.
            </p>
          </div>
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
          <div class="cards-body">
            <PcontentsList
              v-for="pcontentInfo in pcontentsInfo"
              :key="pcontentInfo.pcid"
              :pcontentInfo="pcontentInfo"
            ></PcontentsList>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import PcontentButton from '@/components/pcontents/PcontentButton.vue';
import PcontentsList from '@/components/pcontents/PcontentsList';
import { fetchPcontents } from '@/api';
// import { createLogger } from 'vuex';

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
      let set = new Set();
      this.pcontentsInfoAll.forEach(pcontentInfo => {
        if (!set.has(pcontentInfo.ctid)) {
          set.add(pcontentInfo.ctid);
          this.pcontentNames.push({
            ctid: pcontentInfo.ctid,
            contentName: pcontentInfo.content.ctname,
          });
        }
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
.jumbotron {
  padding-bottom: 2vw;
  text-align: center;
  background-color: transparent;
  margin-bottom: 0px;
}

.jumbotron > h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.wrap {
  padding-top: 2rem;
  padding-left: 7vw;
  padding-right: 7vw;
  margin-bottom: 6rem;
}

.cards-header-items {
  margin: 10px auto 2rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(50px, 120px));
  grid-column-gap: 7px;
}

.cards-header-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin: 10px 10px 15px;
  box-sizing: border-box;
  background-color: rgba(225, 106, 0, 0.8);
  /* background-color: rgba(0, 0, 0, 0.75); */
  border-radius: 10px;
  color: #ffffff;
  -webkit-box-shadow: 0 0px 5px 0px rgba(225, 106, 0, 0.75);
}

.cards-body {
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 36px;
}
</style>
