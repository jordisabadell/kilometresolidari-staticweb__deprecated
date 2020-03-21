$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "@@apikey-gfb-app",
        authDomain: "kilometre-solidari-2020.firebaseapp.com",
        databaseURL: "https://kilometre-solidari-2020.firebaseio.com",
        projectId: "kilometre-solidari-2020",
        storageBucket: "kilometre-solidari-2020.appspot.com",
        messagingSenderId: "40369230983",
        appId: "1:40369230983:web:01d332b06f23c24f461422",
        measurementId: "G-J37T7L5G5H"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    $('#formulariContacte').submit(function (e) {
        e.preventDefault();

        //reCaptcha validate
        var response = grecaptcha.getResponse();
        if(response.length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
            return false;
        }
        
        const nom = document.getElementById('inputNom');
        const email = document.getElementById('inputEmail');
        const missatge = document.getElementById("textareaMissatge");

        firebase.database().ref('contact').push({
            'nom': nom.value,
            'email': email.value,
            'missatge': missatge.value
        }).then(function(){
            var html = '<div class="alert alert-success" role="alert">' +
                'Missatge enviat correctament.' +  
                '</div>';
            $("#resposta-content").html(html);
        })
        .catch(function(){
            var html = '<div class="alert alert-danger" role="alert">' +
                'No s\'ha pogut enviar el missatge.' +  
                '</div>';
            $("#resposta-content").html(html);
        });

        $("#formulariContacte").trigger("reset");
    });
});