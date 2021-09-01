console.log("Vue", Vue);

Vue.config.devtools = true;

const app = new Vue({
	el: "#root",
	data: {
		mail1: null,
		mail2: null,
		mail3: null,
		mail4: null,
		mail5: null,
		mail6: null,
		mail7: null,
		mail8: null,
		mail9: null,
		mail10: null,
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
		this.getRndomMail("mail1");
		this.getRndomMail("mail2");
		this.getRndomMail("mail3");
		this.getRndomMail("mail4");
		this.getRndomMail("mail5");
		this.getRndomMail("mail6");
		this.getRndomMail("mail7");
		this.getRndomMail("mail8");
		this.getRndomMail("mail9");
		this.getRndomMail("mail10");
	},
});
