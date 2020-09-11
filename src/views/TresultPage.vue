<template>
  <div>
    <div class="tab-container">
      <div class="tabs">
        <div @click="beActive">
          <a href="#">Users</a>
        </div>
        <div @click="beActive" class="active">
          <a href="#">Pending Lots</a>
        </div>
        <div @click="beActive">
          <a href="#">Nearby Lots</a>
        </div>
        <div @click="beActive">
          <a href="#">Recent Lots</a>
        </div>
      </div>
    </div>
    <div class="outer-circle"></div>
  </div>
</template>

<script>
export default {
  methods: {
    removeClassAll(className) {
      var tabs = document.querySelectorAll('.tabs > div');
      console.log(tabs);
      console.log(className);
      var check = new RegExp('(\\s|^)' + className + '(\\s|$)');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(check, ' ').trim();
      }
    },
    beActive(event) {
      this.removeClassAll('active');
      console.log('clicked');
      console.log(event);
      event.currentTarget.className += ' active';
    },
  },
  created() {},
};
</script>

<style>
.tab-container {
  margin: 0;
  padding: 0;
  max-height: 35px;
}

div.tabs {
  margin: 0;
  list-style-type: none;
  line-height: 35px;
  max-height: 35px;
  overflow: hidden;
  display: inline-block;
  padding-right: 20px;
}
div.tabs > div.active {
  z-index: 2;
  background: white;
}

div.tabs > div {
  float: left;
  margin: 5px -10px 0;
  border-top-right-radius: 25px 170px;
  border-top-left-radius: 20px 90px;
  padding: 0 30px 0 25px;
  height: 170px;
  background: #ddd;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  max-width: 200px;
}

div.tabs > div > a {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #222;
}

/* Clear Fix took for HTML 5 Boilerlate*/

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
</style>
