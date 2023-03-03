//cerinte:
//vreau sa stiu pe ce input ma aflu cu cursorul (il coloram)
//cand parasesc inputul vreau sa nu mai fie colrat
//la click pe  inputul radio PF o sa vreau sa ramana enabled doar campurile de la PF
// in acelasi timp campurile de la PJ sa devina disabled
// mai coloram diverse
// la click pe trimite as vrea ca info din formular sa fie afisate sub butonul trimite

$("document").ready(function () {
  $('input[type="text"]').attr("disabled", true);

  $("input").focus(function () {
    $(this).css("background", "aqua");
  });

  $("input").blur(function () {
    $(this).css("background", "");
  });

  $('input.choice[value="pf"]').click(function () {
    $(".pj input").attr("disabled", true);
    $(".pf input").attr("disabled", false);
    $(".pf-label").css("color", "red");
    $(".pj-label").css("color", "black");
    $(".pj").css("color", "#ddd");
    $(".pf").css("color", "#000");
  });

  $('input.choice[value="pj"]').click(function () {
    $(".pf input").attr("disabled", true);
    $(".pj input").attr("disabled", false);
    $(".pj-label").css("color", "red");
    $(".pf-label").css("color", "black");
    $(".pf").css("color", "#ddd");
    $(".pj").css("color", "#000");
  });

  let sendButton = $("button");

  sendButton.hover(function () {
    $(this).css("background", "coral");
  });

  sendButton.mouseleave(function () {
    $(this).css("background", "#72fd72");
  });

  // cerinta: butonul sa fie enabled cand ai pf sau pj selectat si macar un camp input cu text

  //keyup -> event dupa ce ridici mana de pe tasta => daca ai scris ceva, el il detecteaza
  // keydown si keypress detecteaza abia la urmatoarea iteratie

  $(".pf input").keyup(function () {
    let hasAnyInputSomeText = $(".pf input")
      .toArray()
      .some((inp) => inp.value.length > 0);
    toggleButtonVisibility(hasAnyInputSomeText);
  });

  $(".pj input").keyup(function () {
    let hasAnyInputSomeText = $(".pj input")
      .toArray()
      .some((inp) => inp.value.length > 0);
    toggleButtonVisibility(hasAnyInputSomeText);
  });

  function toggleButtonVisibility(hasAnyInputSomeText) {
    if (hasAnyInputSomeText) {
      sendButton.attr("disabled", false);
    } else {
      sendButton.attr("disabled", true);
    }
  }

  sendButton.click(function () {
    $("#info").attr("hidden", false);
    $("#placeToAppend").empty();
    let inputsWithText = $('input:enabled[type="text"]')
      .toArray()
      .filter((inp) => inp.value.length > 0) //filter -> e o functie in care intra x elemente si ies mai putine (filtrate) si returneaza un array cu elementele filtrate
      .map((inp) => inp.value) //map -> e o functie in care intra x elemente si ies tot x elemente, dar transformate
      .join(", "); //join -> joineaza elementele dintr-un array intr-un singur text cu separator
    $("#placeToAppend").append(
      `<span style="color:red"> ${inputsWithText}  </span>`
    );
  });

  let x = 10;

  console.log("Numarul ales este " + x + " si este numarul norocos");
  console.log(`Numarul ales este ${x} si este numarul norocos`);
});
