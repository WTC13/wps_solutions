$(document).ready(function () {
    const templateSource = $('#template-services').html();

    const template = Handlebars.compile(templateSource);

    const data_services = {

        servicos:[
            {    
                imagem: "./src/img/logo.png",
                servico: "teste",
                description: "teste"
            },

            {    
                imagem: "./src/img/logo.png",
                servico: "teste",
                description: "teste"
            },

            {    
                imagem: "./src/img/logo.png",
                servico: "teste",
                description: "teste"
            },

            {    
                imagem: "./src/img/logo.png",
                servico: "teste",
                description: "teste"
            },
            
            {    
                imagem: "./src/img/logo.png",
                servico: "teste",
                description: "teste"
            }    
        ]
    };

    const htmlFinal = template(data_services);

    $('#handlebar').html(htmlFinal);

    $(".owl-carousel").owlCarousel({
        loop: true,
        center: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: false,
        // autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 4 }
        }
    });

});