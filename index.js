console.log($("h1").val());
var data = [
  {
    image: "./images/jordan1chicago.png",
    title: "Air Jordan 1 Chicago",
    parag:
      "Le succès des Air Jordan I vient de l histoire qui se cache derrière. Michael Jordan aurait joué sur le parquet avec ses Air Jordan I aux pieds pendant toute la saison 1984-1985. Ce qui aurait déplu à la fédération et lui aurait valu une amende de 5 000 dollars pour chaque apparition.Une amende que Nike aurait décidé de payer tout au long de la saison. C est sur cette histoire un peu édulcorée que s est basée la politique marketing pour la sortie officielle de la fameuse paire de",
  },
  {
    image: "./images/airjordan3.png",
    title: "air jordan 3",
    parag:
      "Le modèle Air Jordan 3 a marqué le véritable succès de la marque. Pour leur conception, Nike a fait appel à Spike Lee et Tinker Hatfield le célèbre inventeur des Air Max 1. C est lui qui eut l idée d afficher la bulle d air à l arrière de la chaussure. C est aussi la première fois que l on voit apparaître le logo de la marque : Jumpman.",
  },
  {
    image: "./images/airjordan4.png",
    title: "air jordan 4",
    parag:
      "Avec ces Air Jordan 4, Michael Jordan a fait des merveilles lors de la saison 1989, marquant en moyenne plus de 32 points, avec 8 passes, de nombreux rebonds et interceptions à chaque match. C est avec les Air Jordan IV qu il a fait le célèbre « The Shot » au-dessus du joueur Craig Ehlo.L acteur Spike Lee rendit la paire célèbre dans une publicité avec Mike. J qui marqua beaucoup les esprits. Suite à cette diffusion, la basket Air Jordan 4 est rentrée à coups surs dans la street culture !",
  },
  {
    image: "./images/airjordan7.png",
    title: "air jordan 7",
    parag:
      "Cette fois-ci, Tinker Hatfield s est inspiré de la culture tribale d Afrique de l Ouest. Le design des shoes est plus colorée, et la bulle d air présente sur les précédents modèles n apparaît plus.Avec ces sneakers, Michael Jordan devient une superstar. Il détient désormais une seconde bague de champion, un autre titre de meilleur marqueur. Le modèle est populaire avec le coloris “Olympic” car Michael Jordan devient champion Olympiques de Basket-Ball à Barcelone en 1992 avec la “Dream Team USA”.",
  },
];

function display() {
  for (let i = 0; i < data.length; i++) {
    var container = $("<div class='container'></div>");
    var box = $("<div class='box'></div>");
    var img = $(`<img src = ${data[i].image} class="jordan">`);
    var h2 = $(`<h2 class="name">${data[i].title}</h2>`);
    var p = $(`<p class="description">${data[i].parag}</p>`);
    box.append(h2, p);
    container.append(img);
    container.append(box);
    $(".global").append(container);
  }
}
display();

$(".box").hide();
$(".jordan")
  .on("mouseenter", function () {
    $(this).siblings(".box").show();
  })
  .on("mouseleave", function () {
    $(this).siblings(".box").hide();
  });

function add() {
  var newSneakers = {
    title: $("#name").val(),
    image: $("#iamge-model").val(),
    parag: $("#history").val(),
  };
  data.push(newSneakers);
  $(".global").empty();
  display();
}
$("#btn").click(add);

function deleteElement() {
  let product = $("#delt").val();
  for (let i = 0; i < data.length; i++) {
    if (data[i].title === product) {
      data.splice(i, 1);
    }
  }
  $(".global").empty();
  display();
}
$("#delete").click(deleteElement);
