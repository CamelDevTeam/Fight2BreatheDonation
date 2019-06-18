
<script src="https://checkout.stripe.com/checkout.js"></script>
<script>
//Live Key - pk_live_RvcUC2kx0CIqNwX1CVMcCjoK
//Sandbox Key - pk_test_Os9K96ObndnPKQUqgF06sMR4
let handler = StripeCheckout.configure({
  key: 'pk_live_RvcUC2kx0CIqNwX1CVMcCjoK',
  image: 'https://irp-cdn.multiscreensite.com/8ec3a15b/dms3rep/multi/donation-store-icon.svg',
  locale: 'auto',
  zipCode: true,
  billingAddress:true,
  shippingAddress:false,
  currency: 'USD',
  panelLabel: 'DONATE',
  token: function(token,args) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
      submitForm(token,args,amount);
  }
});

</script>