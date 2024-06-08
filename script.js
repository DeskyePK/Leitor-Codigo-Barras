
  $("#input").on("input change", function () {
    input = $("#input").val();
    var url =
      "https://us.openfoodfacts.org/api/v0/product/" + input ;

    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function (data) {
        var dados = data["product"];
        var product = dados.product_name;
        var image = dados.image_front_url;

        $(".result").text(product);
        document.getElementById("imagemProduto").src = image;
        document.getElementById("imagemProduto").style.display = 'block';

      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Erro: " + textStatus + ", " + errorThrown);
      },
    });
  });