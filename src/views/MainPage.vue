<template>
  <div>
    <div class="bgImg">
      <div class="jumbotron">
        <h1>FAST</h1>
        <p class="desc">
          Patients can rehabiltate their upper limbs using embeded devices with
          VR contents by this service.
        </p>
        <p>
          <router-link
            to="/patients"
            class="btn btn-primary btn-lg"
            role="button"
            >환자 탐색
          </router-link>
          <router-link
            to="/worklists"
            class="btn btn-primary btn-lg"
            role="button"
            >Worklist 보기</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bgImg {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bgImg::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('../assets/mainImage.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right;
  opacity: 0.5;
}
.jumbotron {
  text-align: center;
  background-color: transparent;
}
.jumbotron h1 {
  font-size: 6rem;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 1.4rem;
  font-weight: 50;
}

.jumbotron p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.jumbotron .btn-lg {
  margin: 0px 1rem 3rem;
}
.jumbotron .btn-primary {
  color: #fff;
  background-color: #00a0ff;
  border-color: #00a0ff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0089d9;
  border-color: #0082cc;
}
</style>
