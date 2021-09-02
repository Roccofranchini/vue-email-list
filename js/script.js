console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: "#root",
	data: {
		mails: [],
	},
	methods: {
		getRndomMail(mail) {
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail")
				.then((res) => {
					this[mail] = res.data.response;
				});
		},
	},
	created() {
		for (let i = 0; i < 10; i++)
			axios
				.get("https://flynn.boolean.careers/exercises/api/random/mail")
				.then((res) => {
					const mail = res.data.response;
					this.mails.push(mail);
				})
				.catch((error) => {
					this.error = true;
				});
	},
});
