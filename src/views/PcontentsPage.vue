<template>
  <div>
    <SearchBar></SearchBar>
    <div class="app-body">
      <template v-if="isLoading">
        Loading..
      </template>
      <template v-else>
        <div class="wrap">
          <h1>{{ this.ptname }}</h1>
          <div class="patient-info">
            <div>Age: {{ this.ptage }}</div>
            <div>Total play count: {{ this.totalPlayCount }}</div>
            <div>Last play date: {{ this.lastPlayDate }}</div>
            <div>First play date: {{ this.firstPlayDate }}</div>
          </div>
          <div class="button-wrap">
            <div class="b-button">
              <b-dropdown
                id="dropdown-1"
                text="컨텐츠 필터"
                class="m-md-2"
                variant="white border-secondary"
                size="sm"
              >
                <b-dropdown-item @click.prevent="selectAllContents">
                  <div>전체보기</div>
                </b-dropdown-item>
                <PcontentButton
                  v-for="pcontentName in pcontentNames"
                  :key="pcontentName.ctid"
                  :pcontentName="pcontentName"
                  @filterContent="contentFilter"
                ></PcontentButton>
              </b-dropdown>
            </div>
            <div class="b-button">
              <b-dropdown
                id="dropdown-1"
                text="날짜순 정렬"
                class="m-md-2 lang-dropdown"
                variant="white border-secondary"
                size="sm"
              >
                <b-dropdown-item @click.prevent="sortContentAscending">
                  <div>오래된 순</div>
                </b-dropdown-item>
                <b-dropdown-item @click.prevent="sortContentDescending">
                  <div>최신순</div>
                </b-dropdown-item>
              </b-dropdown>
            </div>
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
import PcontentsList from '@/components/pcontents/PcontentsList.vue';
import { fetchPcontents } from '@/api';

export default {
  components: {
    SearchBar,
    PcontentButton,
    PcontentsList,
  },
  data() {
    return {
      pcontentsInfoAll: [], // Array of objects including ptid, ctid, pcid, etc fetched from back-end server
      isLoading: false, // Flag showing whether fetching data from back-end server is done or not
      pcontentNames: [],
      ctid: null,
      ptname: ' ' + this.$route.params.ptname,
      ptage: ' ' + this.$route.params.ptage,
      totalPlayCount: null,
      lastPlayDate: '',
      firstPlayDate: '',
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
    async fetchPcontentsData() {
      this.isLoading = true;
      const pcontentsInfoAllData = await fetchPcontents(
        this.$route.params.ptid,
      );
      this.isLoading = false;
      this.pcontentsInfoAll = pcontentsInfoAllData.data.pcontentsInfo;
      this.totalPlayCount = ' ' + this.pcontentsInfoAll.length;
      this.pcontentsInfoAll.sort(function(a, b) {
        if (a.pcid > b.pcid) return -1;
        if (a.pcid < b.pcid) return 1;
        return 0;
      });
      let lastPlayCdate = this.pcontentsInfoAll[0].cdate;
      this.lastPlayDate = ` ${lastPlayCdate.substring(
        6,
        8,
      )}. ${lastPlayCdate.substring(4, 6)}. ${lastPlayCdate.substring(0, 4)}.`;
      let firstPlayCdate = this.pcontentsInfoAll[
        this.pcontentsInfoAll.length - 1
      ].cdate;
      this.firstPlayDate = ` ${firstPlayCdate.substring(
        6,
        8,
      )}. ${firstPlayCdate.substring(4, 6)}. ${firstPlayCdate.substring(
        0,
        4,
      )}.`;
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
    sortContentAscending() {
      this.pcontentsInfoAll.sort(function(a, b) {
        if (a.pcid < b.pcid) return -1;
        if (a.pcid > b.pcid) return 1;
        return 0;
      });
    },
    sortContentDescending() {
      this.pcontentsInfoAll.sort(function(a, b) {
        if (a.pcid > b.pcid) return -1;
        if (a.pcid < b.pcid) return 1;
        return 0;
      });
    },
  },
  created() {
    this.fetchPcontentsData();
  },
};
</script>
<style scoped>
h1 {
  font-family: 'Avenir', 'Lato', '애플 SD 산돌고딕 Neo', 'Apple SD Gothic Neo',
    '나눔바른고딕', 'NanumBarunGothic', '나눔고딕', 'NanumGothic', '맑은 고딕',
    'Malgun Gothic', '돋움', 'dotum', 'AppleGothic', 'sans-serif';
  letter-spacing: 2.5px;
  padding-top: 1vw;
}

.patient-info div {
  font-family: 'Avenir', 'Lato', '애플 SD 산돌고딕 Neo', 'Apple SD Gothic Neo',
    '나눔바른고딕', 'NanumBarunGothic', '나눔고딕', 'NanumGothic', '맑은 고딕',
    'Malgun Gothic', '돋움', 'dotum', 'AppleGothic', 'sans-serif';
  font-size: 1.1rem;
  letter-spacing: -0.5px;
  word-spacing: -0.5px;
  float: left;
  padding: 1.2vw 2vw 0.5vw 0;
  white-space: pre;
}

.wrap {
  padding-top: 5rem;
  padding-left: 7vw;
  padding-right: 7vw;
  margin-bottom: 6rem;
}

.cards-body {
  clear: both;
  margin-top: 10px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 36px;
}

.button-wrap {
  clear: both;
}

.b-button {
  padding: 0 0 2rem 0.5vw;
  float: right;
}

.dropdown-menu {
  min-width: 1rem;
}
</style>
