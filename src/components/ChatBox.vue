<script>
import bot from "../assets/bot.svg";
import user from "../assets/user.svg";

export default {
    methods: {

    },
    mounted() {

        // const origin = `http://localhost:3000`;
        const origin = `https://kuncung-chat-bot.onrender.com`;

        const form = document.querySelector("#form");
        const chatContainer = document.querySelector("#chat_container");

        let loadInterval;
        function loader(el) {
            el.textContent = "";

            loadInterval = setInterval(() => {
                el.textContent += ".";

                if (el.textContent === "...") {
                    el.textContent = "";
                }
            }, 300);
        }

        function typeText(el, text) {
            let index = 0;
            let interval = setInterval(() => {
                if (index < text.length) {
                    el.innerHTML += text.charAt(index);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 20);
        }

        function generateUniqueId() {
            const timeStamp = Date.now();
            const randomNumber = Math.random();
            const hexadecimalString = randomNumber.toString(16);

            return `id-${timeStamp}-${hexadecimalString}`;
        }

        function chatStripe(isAi, value, uniqueId) {
            return `
      <div class="wrapper ${isAi && "ai"}">
        <div class="chat" style="display:flex; flex-direction:row; gap:1rem;">
          <div class="profile">
            <img
              src="${isAi ? bot : user}"
              alt="${isAi ? "bot" : "user"}"
            />
          </div>

          <div class="message" id="${uniqueId}">
            ${value}
          </div>
        </div>

      </div>
    `;
        }

        async function handleSubmit(e) {
            e.preventDefault();

            const data = new FormData(form);

            //User Chat Stripe
            chatContainer.innerHTML += chatStripe(false, data.get("prompt"));

            form.reset();

            //Bot Chat Stripe
            const uniqueId = generateUniqueId();
            chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

            chatContainer.scrollTop = chatContainer.scrollHeight;

            const messageDiv = document.getElementById(uniqueId);

            loader(messageDiv);

            const response = await fetch(`${origin}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: data.get("prompt"),
                }),
            });

            clearInterval(loadInterval);
            messageDiv.innerHTML = "";

            if (response.ok) {
                const data = await response.json();
                const parsedData = data.bot.trim();

                typeText(messageDiv, parsedData);
            } else {
                const err = await response.json();

                messageDiv.innerHTML = "Something went wrong";

                alert(err);
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            this.getElementById("textarea").oninput = function () {
                this.style.height = "";
                this.style.height = Math.min(textarea.scrollHeight, 150) + "px";
            };

            form.addEventListener("submit", handleSubmit);
            form.addEventListener("keyup", (e) => {
                if (e.key === "Enter") {
                    handleSubmit(e);
                }
            });
        });
    }
}
</script>

<template>
    <section>
        <div id="topContainer">
            <div id="chat_container">

            </div>

            <form id="form">
                <div class="textarea-wrapper">
                    <textarea name="prompt" id="textarea" placeholder="Ask Codex..."
                        oninput="resizeTextarea()"></textarea>
                    <button type="submit"><img src="../assets/send.svg" alt="send"></button>
                </div>
            </form>

        </div>
    </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&display=swap");

section {
    background-color: rgb(220, 229, 239);
    margin-top: 5rem;
    height: 80%;
    width: 67%;
    border-radius: 1rem;
    overflow: hidden;
}


#topContainer {
    color: rgb(217, 217, 217);
    width: 100%;
    height: 100%;
    background: #343541;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

#chat_container {
    background: #343541;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 10px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    padding: 1rem;
    padding-bottom: 20px;
    scroll-behavior: smooth;
}

/* hides scrollbar */
#chat_container::-webkit-scrollbar {
    display: none;
}

.wrapper {
    width: 100%;
    padding: 15px;
}

.ai {
    background: #40414f;
}

.chat {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
}

.profile {
    width: 36px;
    height: 36px;
    border-radius: 5px;

    background: #5436da;

    display: flex;
    justify-content: center;
    align-items: center;
}

.ai .profile {
    background: #10a37f;
}

.profile img {
    width: 60%;
    height: 60%;
    object-fit: contain;
}

.message {
    flex: 1;

    color: #dcdcdc;
    font-size: 20px;

    max-width: 100%;
    overflow-x: scroll;

    /*
   * white space refers to any spaces, tabs, or newline characters that are used to format the CSS code
   * specifies how white space within an element should be handled. It is similar to the "pre" value, which tells the browser to treat all white space as significant and to preserve it exactly as it appears in the source code.
   * The pre-wrap value allows the browser to wrap long lines of text onto multiple lines if necessary.
   * The default value for the white-space property in CSS is "normal". This tells the browser to collapse multiple white space characters into a single space, and to wrap text onto multiple lines as needed to fit within its container.
  */
    white-space: pre-wrap;

    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* hides scrollbar */
.message::-webkit-scrollbar {
    display: none;
}

form,
.textarea-wrapper {
    width: 98%;
    margin: 0 auto;
    background: #40414f;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 1rem;
}

.textarea-wrapper {
    margin-bottom: 0;
    padding: 0.8rem;
}

textarea {
    width: 100%;

    color: #fff;
    font-size: 18px;
    padding: 0.1rem 0;
    background: transparent;
    border-radius: 5px;
    border: none;
    outline: none;
    height: 100%;
    /* overflow-y: auto; */
    -moz-resize: none;
    /* Disable resizing for Mozilla-based browsers */
    resize: none;
    /* Disable resizing for all other modern browsers */
}

button {
    outline: 0;
    border: 0;
    cursor: pointer;
    background: transparent;
}

form img {
    width: 30px;
    height: 30px;
}
</style>