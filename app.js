const app = Vue.createApp({
    data(){
        return{
            myName :'Mihir Jariwala',
            StudentID:'1224388',
            userProfile:[],
            weatherData:[],
            city:'london',
            province:'ontario',
            country:'canada',
            definitionWord:[],
            word:''
         };
    },
   computed: {
        myNameStuID(){
            return `${this.myName} - ${this.StudentID}`;
        }
    },
    methods:{
       userProfileData(){
         fetch('https://comp6062.liamstewart.ca/random-user-data')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.userProfile = data;
            })
            .catch(errorPrint => {
                console.log(errorPrint);
            })

       },
       weatherInformation(){
            fetch(`https://comp6062.liamstewart.ca/weather-data?city=${this.city}&province=${this.province}&country=${this.country}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.weatherData = data;
            })
            .catch(errorPrint => {
                console.log(errorPrint);
            })
       },
       definitionWordData(){
        fetch(`https://comp6062.liamstewart.ca/api/define?word=${this.word}`)
        .then(response => {
                return response.json();
            })
            .then(data => {
                this.definitionWord = data;
            })
            .catch(errorPrint => {
                console.log(errorPrint);
            })
       }

    },

    created(){
        this.userProfileData();
        this.weatherInformation();
    }
    
        

});
app.mount('#app');