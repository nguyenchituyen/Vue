<template>
  <dialog className="dialog" ref="dialogRef">
    <h3 className="dialog__title">
        Vue Dialog
    </h3>
    <p className="dialog__txt">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <button @click="handleClose" type="button" className="btn btn--close dialog__btn">
        Close
    </button>
  </dialog>
</template>

<script>

export default {
  name: 'DialogScreen',
  props: {
    visible: { default: false, type: Boolean },
  },
  watch: {
    visible: function(newVal) {
      if(newVal === true) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  methods: {
    show() {
      this.$refs.dialogRef.showModal();
    },
    hide() {
      this.$refs.dialogRef.close();
    },
    handleClose() {
      this.$emit("close-dialog");
    }
  }
}
</script>
