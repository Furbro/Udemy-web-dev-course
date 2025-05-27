// $()  or jQuery()
// $("h1").css("color"); checks the color of h1
// $("h1").addClass("bogus-title"); adds bogus-title to h1
$("button").addClass("bogus");
$("h1").text("Hello!");
$("button").text("Don't click me");
$("button").html("<big>I'm a button</big>");
$("a").attr("href", "https://www.bing.no/"); /**/
$("h1").attr("class"); /* This checks what attributes the h1 has*/

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  //   console.log(event.key);
  //   let e = event.key;
  //   $("h1").text(e);
  $("h1").text(event.key);
});

// $(document).on("event")

$("h1").on("mouseover", function () {
  $("h1").css("color", "pink");
});

/*before and after the selected element, but append and prepend
adds element inside the selected element*/

$("h1").before("<button>new</button>");

$("h1").after("<button>new1</button>");

/* adds new button to html;*/
$("h1").prepend("<button>new2</button>");

$("h1").append("<button>new3</button>");

// $("button").remove();

$("button").on("dblclick", function () {
  //   $("h1").fadeToggle();
  /* can also use:'
  - hide
  - show
  - slideUP/slideDown
  - most of these can be combined with toggle */
  //   $("h1").animate({ opacity: 0.5 /* only numeric values!!*/ });
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
