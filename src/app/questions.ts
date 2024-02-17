import { Category } from './model';

export const categories: Category[] = [
  {
    name: 'Marvel',
    questions: [
      {
        value: 100,
        question: '¿De qué dos colores es el traje de Spiderman?',
        answer: 'Rojo y azul',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Qué grita Hulk cuando se enfada?',
        answer: 'Hulk smash/aplastar!',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿De qué planeta viene Thor??',
        answer: 'Asgard',
        isAnswered: false,
      },
      {
        value: 400,
        question:
          'Di el nombre de al menos CUATRO de los Guardianes de la Galaxia.',
        answer: 'Groot, Starlord/Peter, Gamora, Rocket, Drax, Nebula, Yondu',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿De qué metal está hecho el escudo del Capitán América?',
        answer: 'Vibranium',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Disney',
    questions: [
      {
        value: 100,
        question:
          '¿Qué tipo de animal es Remy, el protagonista de Ratatouille?',
        answer: 'Una rata',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Dónde viven las princesas Elsa y Ana en Frozen?',
        answer: 'Arendelle',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cómo se llama el villano de La Bella y La Bestia?',
        answer: 'Gastón',
        isAnswered: false,
      },
      {
        value: 400,
        question:
          '¿Cuál es el sueño de Tiana en la película La Princesa y el Sapo?',
        answer: 'Tener su propio restaurante',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Cómo se llama el conejo mejor amigo de Bambi?',
        answer: 'Tambor/Thumper',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Star Wars',
    questions: [
      {
        value: 100,
        question:
          '¿Quién es el protagonista de las primeras películas (antiguas) de Star Wars?',
        answer: 'Luke Skywalker',
        isAnswered: false,
      },
      {
        value: 200,
        question:
          '¿De qué color era el sable láser de Anakin que luego heredó su hijo?',
        answer: 'Azul',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cómo se llama en realidad "baby yoda"?',
        answer: 'Grogu',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cómo se llama la nave que pilota Han Solo?',
        answer: 'Millenium Falcom/Halcón Milenario',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Quién construyó a C-3PO?',
        answer: 'Anakin Skywalker',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'España',
    questions: [
      {
        value: 100,
        question: '¿Cuál es la capital de España?',
        answer: 'Madrid',
        isAnswered: false,
      },
      {
        value: 200,
        question:
          '¿Cómo se llama el plato típico español hecho con patatas y huevos?',
        answer: 'Tortilla de patatas',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cuál es el deporte más popular en España?',
        answer: 'Fútbol/soccer',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cuál es el principal cultivo en Jaén?',
        answer: 'Olivas',
        isAnswered: false,
      },
      {
        value: 500,
        question:
          '¿En qué ciudad está La Sagrada Familia, la famosa catedral diseñada por Gaudí?',
        answer: 'Barcelona',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Anime',
    questions: [
      {
        value: 100,
        question: '¿Cómo se llama el protagonista de Dragon Ball?',
        answer: 'Goku',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Qué come Luffy para tener poderes de goma?',
        answer: 'Fruta del diablo, Gum Gum Fruit',
        isAnswered: false,
      },
      {
        value: 300,
        question:
          '¿Cómo se llama la tripulación de piratas de Luffy en One Piece?',
        answer: 'Los Piratas del Sombrero de Paja',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Qué técnica especial hace Tanjiro de Demon Slayer?',
        answer: 'Respiración de agua',
        isAnswered: false,
      },
      {
        value: 500,
        question:
          '¿Cuál es el nombre real del héroe calvo (el protagonista) en One Punch Man?',
        answer: 'Saitama',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Matemáticas',
    questions: [
      {
        value: 100,
        question: '¿Cuántos minutos hay en una hora?',
        answer: '60',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuántos centímetros hay en un metro?',
        answer: '100',
        isAnswered: false,
      },
      {
        value: 300,
        question:
          'Si un coche viaja a 60 millas por hora, ¿cuántas millas recorrerá en 5 horas?',
        answer: '300',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cuál es el máximo común divisor de 12 y 18?',
        answer: '6',
        isAnswered: false,
      },
      {
        value: 500,
        question:
          'Mamá tenía $45 dólares para gastar en la tienda. Ya lleva gastados 1/5 de ese dinero. ¿Cuánto le queda?',
        answer: '$36',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Geografía',
    questions: [
      {
        value: 100,
        question: '¿Cuántos continentes hay en el mundo?',
        answer: '7',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuál es el océano más grande del mundo?',
        answer: 'Pacífico',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cuál es la montaña más alta del mundo?',
        answer: 'Everest',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cuál es el desierto más grande del mundo?',
        answer: 'Desierto del Sáhara',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Cuál es el país más grande del mundo por área?',
        answer: 'Rusia',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Mamá',
    questions: [
      {
        value: 100,
        question: '¿Cuál es su color favorito?',
        answer: 'Verde',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuántos años tiene?',
        answer: '40',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cuál es su restaurante favorito?',
        answer: 'Red Robin',
        isAnswered: false,
      },
      {
        value: 400,
        question: 'Verdadero o falso: Mamá nació en Valdepeñas de Jaén.',
        answer: 'FALSO',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Qué fecha nació?',
        answer: '16 Octubre 1983',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Lalucho',
    questions: [
      {
        value: 100,
        question: '¿Cuántos años cumple este año?',
        answer: '14',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuál es el color favorito de Leandro?',
        answer: 'Lima/Verde claro',
        isAnswered: false,
      },
      {
        value: 300,
        question:
          '¿Qué responde normalmente Leandro si le preguntas "¿cómo estás?"?',
        answer: 'Soy Pepe/Muy nice',
        isAnswered: false,
      },
      {
        value: 400,
        question:
          '¿Qué programa usa para escribir su historia en el ordenador?',
        answer: 'Google Docs/Slides',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿De qué personaje se disfrazó el año pasado en Halloween?',
        answer: 'Rengoku Kyojuro',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Elisole',
    questions: [
      {
        value: 100,
        question: '¿Cuál es el hobby o pasatiempo favorito de Elisa?',
        answer: 'Dibujar',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuál es su comida favorita?',
        answer: 'Espagueti',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Fecha completa de nacimiento?',
        answer: '10 Agosto 2011',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cuál es su clase menos favorita?',
        answer: 'Utah Studies/Ciencias Sociales',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Cuántos sketchbooks tiene Elisa?',
        answer: '11',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Jazmín',
    questions: [
      {
        value: 100,
        question: '¿Le gusta su pelo?',
        answer: 'Sí',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuál es su color favorito?',
        answer: 'Morado',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cuál es su comida favorita?',
        answer: 'Lasaña',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿En qué fecha completa nació Jazmín?',
        answer: '8 Diciembre 2013',
        isAnswered: false,
      },
      {
        value: 500,
        question:
          'Verdadero o falso: Su segundo nombre, Alejandra, lo pusieron en honor al abuelo de papá.',
        answer: 'Falso, en honor al abuelo de mamá',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Natán',
    questions: [
      {
        value: 100,
        question: '¿En qué año nació Natán?',
        answer: '2015',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿Cuál es su color favorito?',
        answer: 'Naranja',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿Cuál es su comida favorita?',
        answer: 'Sopa',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿Cómo se dice "calcetines" en Natanish?',
        answer: 'Sancantines',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Cuál es el palíndromo de "Natán"?',
        answer: 'Natán',
        isAnswered: false,
        time: 120,
      },
    ],
  },
  {
    name: 'Conor',
    questions: [
      {
        value: 100,
        question: '¿En qué ciudad nació?',
        answer: 'Pittsburgh',
        isAnswered: false,
      },
      {
        value: 200,
        question: '¿En qué año nació?',
        answer: '2020',
        isAnswered: false,
      },
      {
        value: 300,
        question: '¿En qué mano se hizo daño en las uñas?',
        answer: 'Derecha',
        isAnswered: false,
      },
      {
        value: 400,
        question: '¿De dónde viene "Ti-Ti-Way"?',
        answer: 'Chuchuá',
        isAnswered: false,
      },
      {
        value: 500,
        question: '¿Fecha de nacimiento completa?',
        answer: '17 Enero 2020',
        isAnswered: false,
        time: 120,
      },
    ],
  },
];
