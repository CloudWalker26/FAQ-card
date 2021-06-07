for (let i = 0; i < $("button").length; i++) {
  $("button")
    .eq(i)
    .on("click", function () {
      $("button").eq(i).toggleClass("arrow");

      if ($("button").eq(i).hasClass("arrow")) {
        $("p").eq(i).show();
        $("h1")
          .eq(i + 1)
          .addClass("h1-change");
      } else {
        $("p").eq(i).hide();
        $("h1")
          .eq(i + 1)
          .removeClass("h1-change");
      }
    });
}

for (let i = 0; i <= $("button").length; i++) {
  $("h1")
    .eq(i)
    .on("click", function () {
      $("h1")
        .eq(i - 1)
        .toggleClass("active");

      if (
        $("h1")
          .eq(i - 1)
          .hasClass("active")
      ) {
        $("p")
          .eq(i - 1)
          .show();
        $("h1").eq(i).addClass("h1-change");
        $("button")
          .eq(i - 1)
          .addClass("arrow");
      } else {
        $("p")
          .eq(i - 1)
          .hide();
        $("h1").eq(i).removeClass("h1-change");
        $("button")
          .eq(i - 1)
          .removeClass("arrow");
      }
    });
}
