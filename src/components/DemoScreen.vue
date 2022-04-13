<template>
  <div>
    <section>
        <nav role="navigation">
          <button type="button" class="btn" @click="showModal">
            Open Vue Dialog
          </button>
        </nav>
        <br /><br />
        <my-component></my-component>
        <br /><br />
        <nav role="navigation">
          <button type="button" class="btn" @click="showMyDialog">
            Open My Dialog
          </button>
        </nav>
        <dialog-screen :visible="visible" @close-dialog="hideModal"></dialog-screen>
        <my-dialog :dialog-opened="opened" @onclose="hideMyDialog">
          <div class="body-dialog">
            Children props is native element
            <input placeholder="Username"/>
            <input type="password" placeholder="Password"/><br />
            Children props is custom element
            <my-input 
              placeholder="Username"
            />
            <my-input 
              type="password" 
              placeholder="Password"
            />
          </div>
        </my-dialog>
    </section>
    </div>
</template>

<script>
import DialogScreen from './DialogScreen.vue'
 
export default {
  name: 'DemoScreen',
  components: {
    DialogScreen
  },
  data() {
    return {
      visible: false,
      opened: false
    };
  },
  methods: {
    hideModal() {
      this.visible = false;
    },
    showModal() {
      this.visible = true;
    },
    hideMyDialog() {
      this.opened = false;
    },
    showMyDialog() {
      this.opened = true;
    },
    handleOnChange(e) {
      console.log('======handleOnChange=======', e)
    },
    handleOnBlur(e) {
      console.log('======handleOnBlur=======', e)
    },
    handleOnFocus(e) {
      console.log('======handleOnFocus=======', e)
    },
    handleOnClick(e) {
      console.log('======handleOnClick=======', e)
    },
    handleOnInput(e) {
      console.log('======handleOnInput=======', e)
    }
  }
}
</script>

<style scoped>
.body-dialog {
  text-align: left;
}
</style>
