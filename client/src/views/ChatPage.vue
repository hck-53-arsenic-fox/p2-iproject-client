<script>
import Talk from "talkjs";
import NavbarComponent from "../components/NavbarComponent.vue";
export default {
  name: "ChatPage",
  props: {
    currentUser: {
      type: Object,
      required: true,
      id: localStorage.getItem("id"),
      name: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
    },
  },
  components: {
    NavbarComponent,
  },
  async mounted() {
    await Talk.ready;
    const me = new Talk.User({
      id: this.currentUser.id,
      name: this.currentUser.name,
      email: this.currentUser.email,
      welcomeMessage: "Hey there! How are you? :-)",
      role: "booker",
    });

    const talkSession = new Talk.Session({
      appId: "tDY4oWPG",
      me: me,
    });

    const other = new Talk.User({
      id: "654321",
      name: "Sebastian",
      email: "Sebastian@example.com",
      photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
      welcomeMessage: "Hey, how can I help?",
      role: "default",
    });

    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(other);

    const inbox = talkSession.createInbox();
    inbox.select(conversation);

    inbox.mount(this.$refs.talkjs);
  },
};
</script>

<template>
  <NavbarComponent />
  <div ref="talkjs" style="width: 1000px; margin: 30px; height: 500px">
    <i>Loading chat...</i>
  </div>
</template>
