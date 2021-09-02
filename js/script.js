console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: "#root",
	data: {
		mails: [],
		error: false,
		filter: "",
	},
	computed: {
		filteredMails() {
			const filter = this.filter.toLowerCase();
			const filteredMails = this.mails.filter((mail) => mail.includes(filter));
			return filteredMails.sort();
		},
	},
	methods: {},
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
