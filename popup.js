
// runs when the popup is opened, not sure if it will have issues since it is async compared 
// to the other async update dom function
window.onload = chrome.storage.sync.get(['storedDayOfMonth'], function(result) {
    let storedDayOfMonth = result.storedDayOfMonth;
    console.log('initial stored day of month ' + storedDayOfMonth)

    let day = new Date()
    let actualDayOfMonth = day.getDate()
    console.log('actual day of month '+ actualDayOfMonth)

    
    if(storedDayOfMonth !== actualDayOfMonth){
        console.log('Not the same')
        chrome.storage.sync.get(['dayId'], function(result) {

            let dayIncrease = result.dayId + 1

            chrome.storage.sync.set({'storedDayOfMonth': actualDayOfMonth, 'dayId': dayIncrease}, function() {
                console.log('stored day of month is set to ' + actualDayOfMonth);
                console.log('day id now set to '+ dayIncrease);
            });
        })

    }else {
        console.log('they the same')
    }
})

const frenchDataBase = [
    {
        "id": "1",
        "foreignWord": "Pièce",
        "englishWord": "Room",
        "foreignSentence": "Bienvenue, c'est ma chambre.",
        "englishSentence": "Welcome, this is my room."
    },
    {
        "id": "2",
        "foreignWord": "Réfrigérateur",
        "englishWord": "Refrigerator",
        "foreignSentence": "Ouvrez le réfrigérateur pour récupérer les aliments.",
        "englishSentence": "Open the refirigerator to get the food."
    },
    {
        "id": "3",
        "foreignWord": "Portable",
        "englishWord": "Laptop",
        "foreignSentence": "J'utilise mon ordinateur portable pour aller sur Internet.",
        "englishSentence": "I use my laptop to go on the internet."
    },
    {
        "id": "4",
        "foreignWord": "Climatisation",
        "englishWord": "Air Conditioner",
        "foreignSentence": "Le climatiseur rend la pièce plus froide.",
        "englishSentence": "The air conditioner makes the room colder."
    },
    {
        "id": "5",
        "foreignWord": "Infirmière/Infirmier",
        "englishWord": "Nurse",
        "foreignSentence": "Bienvenue à l'hôpital, l'infirmière vous verra maintenant.",
        "englishSentence": "Welcome to the hospital, the nurse will see you now."
    },
    {
        "id": "6",
        "foreignWord": "Carte de crédit",
        "englishWord": "Credit Card",
        "foreignSentence": "Glissez votre carte de crédit pour terminer l'achat.",
        "englishSentence": "Swipe your credit card to complete the purchase."
    },
    {
        "id": "7",
        "foreignWord": "Le reçu",
        "englishWord": "Receipt",
        "foreignSentence": "Voici votre reçu.",
        "englishSentence": "Here is your receipt."
    },
    {
        "id": "8",
        "foreignWord": "Agent de bord",
        "englishWord": "Flight Attendant",
        "foreignSentence": "Bonjour à tous, je suis votre agent de bord.",
        "englishSentence": "Hello everyone, I am your flight attendant."
    },
    {
        "id": "9",
        "foreignWord": "Nom",
        "englishWord": "Name",
        "foreignSentence": "Mon nom est John. Quel est votre nom?",
        "englishSentence": "My name is John. What is your name?"
    },
    {
        "id": "10",
        "foreignWord": "Université",
        "englishWord": "University",
        "foreignSentence": "Je vais à l'université aux États-Unis.",
        "englishSentence": "I go to university in the United States."
    },
    {
        "id": "11",
        "foreignWord": "Fonctionnement",
        "englishWord": "Running",
        "foreignSentence": "Le garçon court vite.",
        "englishSentence": "The boy is running fast."
    },
    {
        "id": "12",
        "foreignWord": "Salaire",
        "englishWord": "Wage",
        "foreignSentence": "Mon salaire horaire est de 10 $.",
        "englishSentence": "My hourly wage is $10."
    },
    {
        "id": "13",
        "foreignWord": "Vol",
        "englishWord": "Flight",
        "foreignSentence": "Votre vol partira à 8h.",
        "englishSentence": "Your flight will be leaving at 8am."
    },
    {
        "id": "14",
        "foreignWord": "Siège",
        "englishWord": "Seat",
        "foreignSentence": "Vous pouvez avoir mon siège. J'aime rester debout.",
        "englishSentence": "You may have my seat. I like standing."
    },
    {
        "id": "15",
        "foreignWord": "Porte d'embarquement",
        "englishWord": "Boarding Gate",
        "foreignSentence": "La porte d'embarquement est A18.",
        "englishSentence": "The boarding gate is A18. "
    },
    {
        "id": "16",
        "foreignWord": "Bagage",
        "englishWord": "Luggage",
        "foreignSentence": "La zone de ramassage des bagages est au premier étage.",
        "englishSentence": "The luggage pick up area is on the first floor."
    },
    {
        "id": "17",
        "foreignWord": "Poisson",
        "englishWord": "Fish",
        "foreignSentence": "Au menu, nous avons du poisson.",
        "englishSentence": "On the menu we have fish."
    },
    {
        "id": "18",
        "foreignWord": "Médicament",
        "englishWord": "Medicine",
        "foreignSentence": "Vous pouvez aller à l'hôpital et obtenir des médicaments.",
        "englishSentence": "You can go to the hospital and get medicine."
    },
    {
        "id": "19",
        "foreignWord": "Entreprise",
        "englishWord": "Business",
        "foreignSentence": "Ma place d'affaires est à vendre.",
        "englishSentence": "My place of business is for sale."
    },
    {
        "id": "20",
        "foreignWord": "Chienne/Chien",
        "englishWord": "Dog",
        "foreignSentence": "Le nom de mon chien est Jake.",
        "englishSentence": "My dogs name is Jake."
    },
    {
        "id": "21",
        "foreignWord": "Vente",
        "englishWord": "Sale",
        "foreignSentence": "Cet article est en vente pour 20% de réduction.",
        "englishSentence": "This item is on sale for 20% off."
    },
    {
        "id": "22",
        "foreignWord": "Allergie",
        "englishWord": "Allergy",
        "foreignSentence": "J'ai une allergie aux chiens.",
        "englishSentence": "I have ana allergy towards dogs."
    },
    {
        "id": "23",
        "foreignWord": "Départ",
        "englishWord": "Departure",
        "foreignSentence": "Notre départ de train est à 10h.",
        "englishSentence": "Our train departure is at 10am."
    },
    {
        "id": "24",
        "foreignWord": "Arrivée",
        "englishWord": "Arrival",
        "foreignSentence": "Notre heure d'arrivée en avion est le lundi.",
        "englishSentence": "Our plane arrival time is on Monday."
    },
    {
        "id": "25",
        "foreignWord": "Grippe",
        "englishWord": "Flu",
        "foreignSentence": "Je suis venu dans ce pays et j'ai attrapé la grippe.",
        "englishSentence": "I came to this country and got the flu."
    },
    {
        "id": "26",
        "foreignWord": "Réservation",
        "englishWord": "Reservation",
        "foreignSentence": "Nous voulons faire une réservation pour 18h.",
        "englishSentence": "We want to make a reservation for 6pm."
    },
    {
        "id": "27",
        "foreignWord": "Voiture",
        "englishWord": "Car",
        "foreignSentence": "Ma voiture est rouge. Ma voiture est également rapide.",
        "englishSentence": "My car is red. My car is also fast."
    },
    {
        "id": "28",
        "foreignWord": "Boxe",
        "englishWord": "Boxing",
        "foreignSentence": "La boxe est un sport très important dans mon pays.",
        "englishSentence": "Boxing is a very important sport in my country."
    },
    {
        "id": "29",
        "foreignWord": "Cyclisme",
        "englishWord": "Cycling",
        "foreignSentence": "Nous allons faire du vélo avec des amis.",
        "englishSentence": "We are going cycling with some friends."
    },
    {
        "id": "30",
        "foreignWord": "En train de lire",
        "englishWord": "Reading",
        "foreignSentence": "Quand j'ai du temps, j'aime faire de la lecture.",
        "englishSentence": "When I have some time, I like to do some reading."
    }
]

const spanishDataBase = [
    {
        "id": "1",
        "foreignWord": "Habitación",
        "englishWord": "Room",
        "foreignSentence": "Bienvenido, esta es mi habitación.",
        "englishSentence": "Welcome, this is my room."
    },
    {
        "id": "2",
        "foreignWord": "Refrigerador",
        "englishWord": "Refrigerator",
        "foreignSentence": "Abra el refrigerador para obtener la comida.",
        "englishSentence": "Open the refirigerator to get the food."
    },
    {
        "id": "3",
        "foreignWord": "Ordenador portátil",
        "englishWord": "Laptop",
        "foreignSentence": "Yo uso mi computadora portátil para ir a internet.",
        "englishSentence": "I use my laptop to go on the internet."
    },
    {
        "id": "4",
        "foreignWord": "Aire acondicionado",
        "englishWord": "Air Conditioner",
        "foreignSentence": "El aire acondicionado hace que la habitación sea más fría.",
        "englishSentence": "The air conditioner makes the room colder."
    },
    {
        "id": "5",
        "foreignWord": "Enfermera/Enfermero",
        "englishWord": "Nurse",
        "foreignSentence": "Bienvenido al hospital, la enfermera te verá ahora.",
        "englishSentence": "Welcome to the hospital, the nurse will see you now."
    },
    {
        "id": "6",
        "foreignWord": "Tarjeta de crédito",
        "englishWord": "Credit Card",
        "foreignSentence": "Pase su tarjeta de crédito para completar la compra.",
        "englishSentence": "Swipe your credit card to complete the purchase."
    },
    {
        "id": "7",
        "foreignWord": "Recibo",
        "englishWord": "Receipt",
        "foreignSentence": "Aquí está su recibo.",
        "englishSentence": "Here is your receipt."
    },
    {
        "id": "8",
        "foreignWord": "Auxiliar de vuelo",
        "englishWord": "Flight Attendant",
        "foreignSentence": "Hola a todos, soy su azafata.",
        "englishSentence": "Hello everyone, I am your flight attendant."
    },
    {
        "id": "9",
        "foreignWord": "Nombre",
        "englishWord": "Name",
        "foreignSentence": "Mi nombre es John. ¿Cuál es tu nombre?",
        "englishSentence": "My name is John. What is your name?"
    },
    {
        "id": "10",
        "foreignWord": "Universidad",
        "englishWord": "University",
        "foreignSentence": "Voy a la universidad en los Estados Unidos.",
        "englishSentence": "I go to university in the United States."
    },
    {
        "id": "11",
        "foreignWord": "Corriendo",
        "englishWord": "Running",
        "foreignSentence": "El niño corre rápido.",
        "englishSentence": "The boy is running fast."
    },
    {
        "id": "12",
        "foreignWord": "Salario",
        "englishWord": "Wage",
        "foreignSentence": "Mi salario por hora es de $ 10.",
        "englishSentence": "My hourly wage is $10."
    },
    {
        "id": "13",
        "foreignWord": "Vuelo",
        "englishWord": "Flight",
        "foreignSentence": "Su vuelo saldrá a las 8am.",
        "englishSentence": "Your flight will be leaving at 8am."
    },
    {
        "id": "14",
        "foreignWord": "Asiento",
        "englishWord": "Seat",
        "foreignSentence": "Puedes tener mi asiento. Me gusta estar de pie",
        "englishSentence": "You may have my seat. I like standing."
    },
    {
        "id": "15",
        "foreignWord": "Puerta de embarque",
        "englishWord": "Boarding Gate",
        "foreignSentence": "La puerta de embarque es A18.",
        "englishSentence": "The boarding gate is A18. "
    },
    {
        "id": "16",
        "foreignWord": "Equipaje",
        "englishWord": "Luggage",
        "foreignSentence": "El área de recogida de equipaje está en el primer piso.",
        "englishSentence": "The luggage pick up area is on the first floor."
    },
    {
        "id": "17",
        "foreignWord": "Pescado",
        "englishWord": "Fish",
        "foreignSentence": "En el menú tenemos pescado.",
        "englishSentence": "On the menu we have fish."
    },
    {
        "id": "18",
        "foreignWord": "Medicina",
        "englishWord": "Medicine",
        "foreignSentence": "Puede ir al hospital y obtener medicamentos.",
        "englishSentence": "You can go to the hospital and get medicine."
    },
    {
        "id": "19",
        "foreignWord": "Negocio",
        "englishWord": "Business",
        "foreignSentence": "Mi lugar de negocios está en venta.",
        "englishSentence": "My place of business is for sale."
    },
    {
        "id": "20",
        "foreignWord": "Perra/Perro",
        "englishWord": "Dog",
        "foreignSentence": "Mi perro se llama Jake.",
        "englishSentence": "My dog's name is Jake."
    },
    {
        "id": "21",
        "foreignWord": "Rebaja",
        "englishWord": "Sale",
        "foreignSentence": "Este artículo está a la venta con un 20% de descuento.",
        "englishSentence": "This item is on sale for 20% off."
    },
    {
        "id": "22",
        "foreignWord": "Alergia",
        "englishWord": "Allergy",
        "foreignSentence": "Tengo alergia a los perros.",
        "englishSentence": "I have an allergy towards dogs."
    },
    {
        "id": "23",
        "foreignWord": "Salida",
        "englishWord": "Departure",
        "foreignSentence": "Nuestra salida del tren es a las 10am.",
        "englishSentence": "Our train departure is at 10am."
    },
    {
        "id": "24",
        "foreignWord": "Llegada",
        "englishWord": "Arrival",
        "foreignSentence": "La hora de llegada de nuestro avión es el lunes.",
        "englishSentence": "Our plane arrival time is on Monday."
    },
    {
        "id": "25",
        "foreignWord": "Gripe",
        "englishWord": "Flu",
        "foreignSentence": "Vine a este país y me enfermé de gripe.",
        "englishSentence": "I came to this country and got the flu."
    },
    {
        "id": "26",
        "foreignWord": "Reserva",
        "englishWord": "Reservation",
        "foreignSentence": "Queremos hacer una reserva para las 6pm.",
        "englishSentence": "We want to make a reservation for 6pm."
    },
    {
        "id": "27",
        "foreignWord": "Coche",
        "englishWord": "Car",
        "foreignSentence": "Mi coche es rojo. Mi auto también es rápido.",
        "englishSentence": "My car is red. My car is also fast."
    },
    {
        "id": "28",
        "foreignWord": "Boxeo",
        "englishWord": "Boxing",
        "foreignSentence": "El boxeo es un deporte muy importante en mi país.",
        "englishSentence": "Boxing is a very important sport in my country."
    },
    {
        "id": "29",
        "foreignWord": "Ciclismo",
        "englishWord": "Cycling",
        "foreignSentence": "Vamos en bicicleta con algunos amigos.",
        "englishSentence": "We are going cycling with some friends."
    },
    {
        "id": "30",
        "foreignWord": "Leyendo",
        "englishWord": "Reading",
        "foreignSentence": "Cuando tengo algo de tiempo, me gusta leer un poco.",
        "englishSentence": "When I have some time, I like to do some reading."
    }
]

const germanDataBase = [
    {
        "id": "1",
        "foreignWord": "Zimmer",
        "englishWord": "Room",
        "foreignSentence": "Willkommen, das ist mein Zimmer.",
        "englishSentence": "Welcome, this is my room."
    },
    {
        "id": "2",
        "foreignWord": "Kühlschrank",
        "englishWord": "Refrigerator",
        "foreignSentence": "Öffne den Kühlschrank, um das Essen zu bekommen.",
        "englishSentence": "Open the refirigerator to get the food."
    },
    {
        "id": "3",
        "foreignWord": "Laptop",
        "englishWord": "Laptop",
        "foreignSentence": "Ich benutze meinen Laptop, um ins Internet zu gehen.",
        "englishSentence": "I use my laptop to go on the internet."
    },
    {
        "id": "4",
        "foreignWord": "Klimaanlage",
        "englishWord": "Air Conditioner",
        "foreignSentence": "Die Klimaanlage macht den Raum kälter.",
        "englishSentence": "The air conditioner makes the room colder."
    },
    {
        "id": "5",
        "foreignWord": "Krankenschwester/Krankenpfleger",
        "englishWord": "Nurse",
        "foreignSentence": "Willkommen im Krankenhaus, die Krankenschwester wird Sie jetzt sehen.",
        "englishSentence": "Welcome to the hospital, the nurse will see you now."
    },
    {
        "id": "6",
        "foreignWord": "Kreditkarte",
        "englishWord": "Credit Card",
        "foreignSentence": "Wischen Sie mit Ihrer Kreditkarte, um den Kauf abzuschließen.",
        "englishSentence": "Swipe your credit card to complete the purchase."
    },
    {
        "id": "7",
        "foreignWord": "Kassenbon",
        "englishWord": "Receipt",
        "foreignSentence": "Hier ist Ihre Quittung.",
        "englishSentence": "Here is your receipt."
    },
    {
        "id": "8",
        "foreignWord": "Flugbegleiter",
        "englishWord": "Flight Attendant",
        "foreignSentence": "Hallo allerseits, ich bin Ihre Flugbegleiterin.",
        "englishSentence": "Hello everyone, I am your flight attendant."
    },
    {
        "id": "9",
        "foreignWord": "Name",
        "englishWord": "Name",
        "foreignSentence": "Mein Name ist John. Wie heißen Sie?",
        "englishSentence": "My name is John. What is your name?"
    },
    {
        "id": "10",
        "foreignWord": "Universität",
        "englishWord": "University",
        "foreignSentence": "Ich gehe zur Universität in den Vereinigten Staaten.",
        "englishSentence": "I go to university in the United States."
    },
    {
        "id": "11",
        "foreignWord": "Laufen",
        "englishWord": "Running",
        "foreignSentence": "Der Junge rennt schnell.",
        "englishSentence": "The boy is running fast."
    },
    {
        "id": "12",
        "foreignWord": "Lohn",
        "englishWord": "Wage",
        "foreignSentence": "Mein Stundenlohn beträgt 10 Dollar.",
        "englishSentence": "My hourly wage is $10."
    },
    {
        "id": "13",
        "foreignWord": "Flug",
        "englishWord": "Flight",
        "foreignSentence": "Ihr Flug startet um 8 Uhr.",
        "englishSentence": "Your flight will be leaving at 8am."
    },
    {
        "id": "14",
        "foreignWord": "Sitz",
        "englishWord": "Seat",
        "foreignSentence": "Sie können meinen Platz haben. Ich stehe gern.",
        "englishSentence": "You may have my seat. I like standing."
    },
    {
        "id": "15",
        "foreignWord": "Flugsteig",
        "englishWord": "Boarding Gate",
        "foreignSentence": "Das Flugsteig ist A18.",
        "englishSentence": "The boarding gate is A18. "
    },
    {
        "id": "16",
        "foreignWord": "Gepäck",
        "englishWord": "Luggage",
        "foreignSentence": "Die Gepäckaufbewahrung befindet sich im ersten Stock.",
        "englishSentence": "The luggage pick up area is on the first floor."
    },
    {
        "id": "17",
        "foreignWord": "Fisch",
        "englishWord": "Fish",
        "foreignSentence": "Auf der Speisekarte haben wir Fisch.",
        "englishSentence": "On the menu we have fish."
    },
    {
        "id": "18",
        "foreignWord": "Medizin",
        "englishWord": "Medicine",
        "foreignSentence": "Sie können ins Krankenhaus gehen und Medizin bekommen.",
        "englishSentence": "You can go to the hospital and get medicine."
    },
    {
        "id": "19",
        "foreignWord": "Geschäft",
        "englishWord": "Business",
        "foreignSentence": "Mein Geschäftssitz steht zum Verkauf.",
        "englishSentence": "My place of business is for sale."
    },
    {
        "id": "20",
        "foreignWord": "Hund",
        "englishWord": "Dog",
        "foreignSentence": "Mein Hund heißt Jake.",
        "englishSentence": "My dogs name is Jake."
    },
    {
        "id": "21",
        "foreignWord": "Verkauf",
        "englishWord": "Sale",
        "foreignSentence": "Dieser Artikel ist für 20% Rabatt im Angebot.",
        "englishSentence": "This item is on sale for 20% off."
    },
    {
        "id": "22",
        "foreignWord": "Allergie",
        "englishWord": "Allergy",
        "foreignSentence": "Ich habe eine Allergie gegen Hunde.",
        "englishSentence": "I have ana allergy towards dogs."
    },
    {
        "id": "23",
        "foreignWord": "Abfahrt",
        "englishWord": "Departure",
        "foreignSentence": "Unsere Zugabfahrt ist um 10 Uhr.",
        "englishSentence": "Our train departure is at 10am."
    },
    {
        "id": "24",
        "foreignWord": "Ankunft",
        "englishWord": "Arrival",
        "foreignSentence": "Unsere Ankunftszeit im Flugzeug ist am Montag.",
        "englishSentence": "Our plane arrival time is on Monday."
    },
    {
        "id": "25",
        "foreignWord": "Grippe",
        "englishWord": "Flu",
        "foreignSentence": "Ich kam in dieses Land und bekam die Grippe.",
        "englishSentence": "I came to this country and got the flu."
    },
    {
        "id": "26",
        "foreignWord": "Reservierung",
        "englishWord": "Reservation",
        "foreignSentence": "Wir möchten für 18 Uhr reservieren.",
        "englishSentence": "We want to make a reservation for 6pm."
    },
    {
        "id": "27",
        "foreignWord": "Auto",
        "englishWord": "Car",
        "foreignSentence": "Mein Auto ist rot. Mein Auto ist auch schnell.",
        "englishSentence": "My car is red. My car is also fast."
    },
    {
        "id": "28",
        "foreignWord": "Boxen",
        "englishWord": "Boxing",
        "foreignSentence": "Boxen ist in meinem Land ein sehr wichtiger Sport.",
        "englishSentence": "Boxing is a very important sport in my country."
    },
    {
        "id": "29",
        "foreignWord": "Radfahren",
        "englishWord": "Cycling",
        "foreignSentence": "Wir fahren mit ein paar Freunden Fahrrad.",
        "englishSentence": "We are going cycling with some friends."
    },
    {
        "id": "30",
        "foreignWord": "lesen",
        "englishWord": "Reading",
        "foreignSentence": "Wenn ich etwas Zeit habe, lese ich gerne.",
        "englishSentence": "When I have some time, I like to do some reading."
    }
]

const russianDataBase = [
    {
        "id": "1",
        "foreignWord": "Nomer",
        "englishWord": "Room",
        "foreignSentence": "Dobro pozhalovat', eto moya komnata.",
        "englishSentence": "Welcome, this is my room."
    },
    {
        "id": "2",
        "foreignWord": "Kholodil'nik",
        "englishWord": "Refrigerator",
        "foreignSentence": "Otkroyte kholodil'nik, chtoby poluchit' yedu.",
        "englishSentence": "Open the refirigerator to get the food."
    },
    {
        "id": "3",
        "foreignWord": "Portativnyy komp'yuter",
        "englishWord": "Laptop",
        "foreignSentence": "YA ispol'zuyu svoy noutbuk, chtoby vykhodit' v internet.",
        "englishSentence": "I use my laptop to go on the internet."
    },
    {
        "id": "4",
        "foreignWord": "Konditsioner",
        "englishWord": "Air Conditioner",
        "foreignSentence": "Konditsioner delayet komnatu kholodneye.",
        "englishSentence": "The air conditioner makes the room colder."
    },
    {
        "id": "5",
        "foreignWord": "Medsestra",
        "englishWord": "Nurse",
        "foreignSentence": "Dobro pozhalovat' v bol'nitsu, medsestra uvidit vas seychas.",
        "englishSentence": "Welcome to the hospital, the nurse will see you now."
    },
    {
        "id": "6",
        "foreignWord": "Kreditnaya karta",
        "englishWord": "Credit Card",
        "foreignSentence": "Provedite kreditnoy kartoy, chtoby zavershit' pokupku.",
        "englishSentence": "Swipe your credit card to complete the purchase."
    },
    {
        "id": "7",
        "foreignWord": "Chek",
        "englishWord": "Receipt",
        "foreignSentence": "Vot Vash chek.",
        "englishSentence": "Here is your receipt."
    },
    {
        "id": "8",
        "foreignWord": "Bortprovodnik",
        "englishWord": "Flight Attendant",
        "foreignSentence": "Privet vsem, ya vash styuardessa.",
        "englishSentence": "Hello everyone, I am your flight attendant."
    },
    {
        "id": "9",
        "foreignWord": "Imya",
        "englishWord": "Name",
        "foreignSentence": "Menya zovut Dzhon. Kak Vas zovut?",
        "englishSentence": "My name is John. What is your name?"
    },
    {
        "id": "10",
        "foreignWord": "Universitet",
        "englishWord": "University",
        "foreignSentence": "YA idu v universitet v Soyedinennykh Shtatakh.",
        "englishSentence": "I go to university in the United States."
    },
    {
        "id": "11",
        "foreignWord": "Beg",
        "englishWord": "Running",
        "foreignSentence": "Mal'chik bystro begayet.",
        "englishSentence": "The boy is running fast."
    },
    {
        "id": "12",
        "foreignWord": "Zarabotnaya plata",
        "englishWord": "Wage",
        "foreignSentence": "Zarabotnaya plata",
        "englishSentence": "My hourly wage is $10."
    },
    {
        "id": "13",
        "foreignWord": "Reys",
        "englishWord": "Flight",
        "foreignSentence": "Vash reys budet otpravlyat'sya v 8 utra.",
        "englishSentence": "Your flight will be leaving at 8am."
    },
    {
        "id": "14",
        "foreignWord": "Siden'ye",
        "englishWord": "Seat",
        "foreignSentence": "Vy mozhete zanyat' moye mesto. Mne nravitsya stoyat'.",
        "englishSentence": "You may have my seat. I like standing."
    },
    {
        "id": "15",
        "foreignWord": "Vkhod na posadku",
        "englishWord": "Boarding Gate",
        "foreignSentence": "Vykhod na posadku - A18.",
        "englishSentence": "The boarding gate is A18. "
    },
    {
        "id": "16",
        "foreignWord": "bagazhnyy",
        "englishWord": "Luggage",
        "foreignSentence": "Mesto dlya polucheniya bagazha nakhoditsya na pervom etazhe.",
        "englishSentence": "The luggage pick up area is on the first floor."
    },
    {
        "id": "17",
        "foreignWord": "Ryby",
        "englishWord": "Fish",
        "foreignSentence": "V menyu u nas yest' ryba.",
        "englishSentence": "On the menu we have fish."
    },
    {
        "id": "18",
        "foreignWord": "Lekarstvennoye sredstvo",
        "englishWord": "Medicine",
        "foreignSentence": "Vy mozhete poyti v bol'nitsu i poluchit' lekarstvo.",
        "englishSentence": "You can go to the hospital and get medicine."
    },
    {
        "id": "19",
        "foreignWord": "Biznes",
        "englishWord": "Business",
        "foreignSentence": "Moye kommercheskoye predpriyatiye prodayetsya.",
        "englishSentence": "My place of business is for sale."
    },
    {
        "id": "20",
        "foreignWord": "Sobaka",
        "englishWord": "Dog",
        "foreignSentence": "Moyu sobaku zovut Dzheyk.",
        "englishSentence": "My dogs name is Jake."
    },
    {
        "id": "21",
        "foreignWord": "Rasprodazha",
        "englishWord": "Sale",
        "foreignSentence": "Etot tovar prodayetsya so skidkoy 20%.",
        "englishSentence": "This item is on sale for 20% off."
    },
    {
        "id": "22",
        "foreignWord": "allergiya",
        "englishWord": "Allergy",
        "foreignSentence": "U menya allergiya na sobak.",
        "englishSentence": "I have ana allergy towards dogs."
    },
    {
        "id": "23",
        "foreignWord": "Vyyezd",
        "englishWord": "Departure",
        "foreignSentence": "Nash poyezd otpravlyayetsya v 10 utra.",
        "englishSentence": "Our train departure is at 10am."
    },
    {
        "id": "24",
        "foreignWord": "Pribytiye",
        "englishWord": "Arrival",
        "foreignSentence": "Vremya pribytiya nashego samoleta v ponedel'nik.",
        "englishSentence": "Our plane arrival time is on Monday."
    },
    {
        "id": "25",
        "foreignWord": "Gripp",
        "englishWord": "Flu",
        "foreignSentence": "YA priyekhal v etu stranu i zabolel grippom.",
        "englishSentence": "I came to this country and got the flu."
    },
    {
        "id": "26",
        "foreignWord": "Bronirovaniye",
        "englishWord": "Reservation",
        "foreignSentence": "My khotim sdelat' zakaz na 6 vechera.",
        "englishSentence": "We want to make a reservation for 6pm."
    },
    {
        "id": "27",
        "foreignWord": "Mashina",
        "englishWord": "Car",
        "foreignSentence": "Moya mashina krasnaya. Moya mashina tozhe bystraya.",
        "englishSentence": "My car is red. My car is also fast."
    },
    {
        "id": "28",
        "foreignWord": "Zanimat'sya boksom",
        "englishWord": "Boxing",
        "foreignSentence": "Boks - ochen' vazhnyy vid sporta v moyey strane.",
        "englishSentence": "Boxing is a very important sport in my country."
    },
    {
        "id": "29",
        "foreignWord": "Yezda na velosipede",
        "englishWord": "Cycling",
        "foreignSentence": "My yedem na velosipede s druz'yami.",
        "englishSentence": "We are going cycling with some friends."
    },
    {
        "id": "30",
        "foreignWord": "Chteniye",
        "englishWord": "Reading",
        "foreignSentence": "Kogda u menya yest' vremya, ya lyublyu chitat'.",
        "englishSentence": "When I have some time, I like to do some reading."
    }
]


window.onload = chrome.storage.sync.get(['language'], function(languageResult) {
    chrome.storage.sync.get(['dayId'], function(dayIdResult) {
        let dayId = dayIdResult.dayId;
        console.log(dayId)

        if(dayId === 29){
            chrome.storage.sync.set({'dayId': 0}, function() {
                console.log('DayId reset to 0');
              });
            dayId = 0
        }

        let languageChoice = languageResult.language
        let dataBase;
        console.log(languageChoice)

        if (languageChoice === "French"){
            dataBase = frenchDataBase   
            document.getElementById('language').innerHTML = "French"         
        } else if(languageChoice === "Spanish"){
            dataBase = spanishDataBase   
            document.getElementById('language').innerHTML = "Spanish"          
        } else if(languageChoice === "German"){
            dataBase = germanDataBase 
            document.getElementById('language').innerHTML = "German" 
        } else if(languageChoice === "Russian"){
            dataBase = russianDataBase  
            document.getElementById('language').innerHTML = "Russian"  
        }
        else{console.log('how did this happen')}
        
        let foreignWord = dataBase[dayId].foreignWord;
        let englishWord = dataBase[dayId].englishWord;
        let foreignSentence = dataBase[dayId].foreignSentence;
        let englishSentence = dataBase[dayId].englishSentence;
    
        document.getElementById('foreign-word').innerHTML = foreignWord;
        document.getElementById('english-word').innerHTML = englishWord;
        document.getElementById('foreign-sentence-change').innerHTML = foreignSentence;
        document.getElementById('english-sentence-change').innerHTML = englishSentence;
    })    
});

