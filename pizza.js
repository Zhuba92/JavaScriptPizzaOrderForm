$(document).ready(
    function ()
    {
        $("#tabs a").click(showTab);
        $("#toDelivery").submit(toDelivery);
        $("#toConfirmation").submit(toConfirmation);

        function showTab(event)
        {
            event.preventDefault();
            $(this).tab("show");
        }


        function toConfirmation(event)
        {
            event.preventDefault();
            $("#orderConfirmationTab").click();

            // get user name input
            var userName = $("#name").val();
            // get user address input
            var userAddress = $("#address").val();
            // get user city input
            var userCity = $("#city").val();
            // get user state input
            var userState = $("#state").val();
            // get user zipcode input
            var userZipCode = $("#zipCode").val();
            // get user phone number
            var userPhone = $("#phone").val();

            // output addressOutput details
            $("#nameOutput").text(`Name: ${userName}`);
            $("#addressOutput").text(`Address: ${userAddress}`);
            $("#cityOutput").text(`City: ${userCity}`);
            $("#stateOutput").text(`State: ${userState}`);
            $("#zipCodeOutput").text(`Zip Code: ${userZipCode}`);
            $("#phoneOutput").text(`Phone Number: ${userPhone}`);
        }


        function toDelivery(event)
        {
            event.preventDefault();
            $("#deliveryTab").click();

            var meatTotal = 0;
            var veggiesTotal = 0;
            var meatNames = "";
            var veggieNames = "";


            // make a var for delivery fee
            var deliveryFee = 2;

            // get user pizza size input
            var pizzaSize = $("input[name=size]:checked");

            // get crust size data-price value
            var pizzaSizePrice = pizzaSize.data("price");
            var pizzaSizePriceNum = parseFloat(pizzaSizePrice);

            // get user meats input
            var pizzaMeats = $("input[name=meats]:checked");

            // get meats data price value
            pizzaMeats.each(function(){
                meatTotal += $(this).data("price");
                meatNames += $(this).val();
                meatNames += "<br>";
            });

            // get user veggies input
            var pizzaVeggies = $("input[name=veggies]:checked");

            // get veggies data-price value
            pizzaVeggies.each(function(){
                veggiesTotal += $(this).data("price");
                veggieNames += $(this).val();
                veggieNames += "<br>";
            });

            // calculate subTotal
            var subTotal = pizzaSizePriceNum + meatTotal + veggiesTotal;

            // get tax total tax rate = 5.1%
            var taxTotal = subTotal * 0.051;

            // calculate grandTotal
            var grandTotal = deliveryFee + taxTotal + subTotal;

            // output pizzaOutput details
            $("#pizzaSizeOutput").text(`Your size: ${$('input[name="size"]:checked').val()}`);
            $("#pizzaCrustOutput").text(`Your crust: ${$('input[name="crust"]:checked').val()}`);
            $("#pizzaMeatOutput").html(`Your meats:<br> ${meatNames}`);
            $("#pizzaVeggiesOutput").html(`Your veggies:<br> ${veggieNames}`);

            // output subtotalOutput details
            $("#subtotalOutput").text(`Subtotal: $${subTotal.toFixed(2)}`);
            // output taxOutput details
            $("#taxOutput").text(`Tax: $${taxTotal.toFixed(2)}`);
            // output deliveryOutput details
            $("#deliveryOutput").text(`Delivery Fee: $${deliveryFee.toFixed(2)}`);
            // output grandTotalOutput details
            $("#grandTotalOutput").text(`Grand total: $${grandTotal.toFixed(2)}`);
        }

    }
);