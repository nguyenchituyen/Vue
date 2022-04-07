<template>
  <div>
    <section>
        <nav role="navigation">
            <button type="button" className="btn" @click="showModal">
              Open Dialog
            </button>
        </nav>

        <dialog-screen :visible="visible" @close-dialog="hideModal">
        </dialog-screen>
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
      visible: false
    };
  },
  methods: {
    hideModal() {
      this.visible = false;
    },
    showModal() {
      this.visible = true;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>