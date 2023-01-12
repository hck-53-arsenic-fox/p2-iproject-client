<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  name: "speech_to_text",
  data() {
    return {
      runtimeTranscription_: "",
      lang_: "id-ID",
    };
  },
  methods: {
    ...mapActions(useUserStore, ["getNeigh"]),
    startSpeechToTxt() {
      // initialisation of voicereco
      window.SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new window.SpeechRecognition();
      recognition.lang = this.lang_;
      recognition.interimResults = true;
      // event current voice reco word
      recognition.addEventListener("result", (event) => {
        var text = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        this.runtimeTranscription_ = text;
      });
      // end of transcription
      recognition.addEventListener("end", () => {
        recognition.stop();
      });
      recognition.start();
    },
    searchName() {
      // console.log(this.runtimeTranscription_);
      this.getNeigh(this.runtimeTranscription_);
      // console.log(this.runtimeTranscription_);
      // this.getCountries(this.runtimeTranscription_);
    },
  },
};
</script>

<template>
  <div class="">
    <div>
      <input v-model="runtimeTranscription_" type="text" placeholder="Search" />
    </div>
    <div class="voice">
      <div class="speech-to-txt" @click.prevent="startSpeechToTxt">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </button>
      </div>
      <button class="" @click.prevent="searchName">Search</button>
    </div>
  </div>
</template>
