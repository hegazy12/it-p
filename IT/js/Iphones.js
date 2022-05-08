var sum = 0;
function add_to_cart(price)
{
    sum+=price;
    if(confirm("Are you sure you want to add it to the cart?"))
    {
        alert("Added to cart successfully");
    }
    else
    {
        sum-=price;
        alert("Discarded from your cart");
    }
}
function confirming()
{
    if(sum == 0)
    {
        alert("Your cart is empty")
    }
    else if(confirm("The price for your stuff is :" +  sum + "; continue?"))
    {
        alert("Your order has been placed");
        alert("Your cart has been cleared");
        sum = 0;
    }
    else
    {
        if(confirm("Do you want to cancel clear your cart?"))
        {
            sum = 0;
            alert("Your cart has been cleared");
        }
    }
}