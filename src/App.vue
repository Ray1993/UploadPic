 <template>
  <div id="app">
    <div class="pic-list">
        <ul>
            <li><a href="javascript:;"><img :src="addicon" alt="选择图片"></a></li>
        </ul>
    </div>
    <input type="button" name="upload" value="确认上传" class="submit">
    <input type="file" hidden id="picfile">
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      addicon:'src/assets/add.png'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3D3D3D;
  max-width: 1112px;
  margin:60px auto; 
}
ul{
  list-style: none;
  overflow: hidden
}
.pic-list{
  max-width: 1112px;
  margin: 0px auto 50px auto;
  border: 2px solid #3D3D3D;
  border-radius: 5px;
  padding: 50px 10px;
}
.pic-list ul li{
   float: left;
   width: 20%;
   height: 200px;
   margin:0 2.5%;
   position: relative;
}
.pic-list ul li a{
   width: 100%;
   height: 100%;
   position: relative;
   display: block
}
.pic-list ul li img{
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 0px;
  top: 0px;
}
.submit{
  width: 100px;height: 50px;
  background-color: transparent;
  border: 2px solid #3D3D3D;
  float: right;
  color:#3D3D3D ;
  font-size: 16px;
  border-radius: 5px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
}
</style>
