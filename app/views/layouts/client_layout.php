<!DOCTYPE html>
<html lang="en">

<head>
        <meta charset="utf-8">
        <title>Fruitables - Vegetable Website Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="" name="keywords">
        <meta content="" name="description">
        <link rel="stylesheet" type="text/css" href="<?php echo _WEB_ROOT; ?>/node_modules/toastr/build/toastr.css" >

        <!-- Google Web Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap" rel="stylesheet"> 

        <!-- Icon Font Stylesheet -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Libraries Stylesheet -->
        <link href="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/lightbox/css/lightbox.min.css" rel="stylesheet">
        <link href="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">


        <!-- Customized Bootstrap Stylesheet -->
        <link href="<?php echo _WEB_ROOT; ?>/public/assets/clients/css/bootstrap.min.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="<?php echo _WEB_ROOT; ?>/public/assets/clients/css/style.css" rel="stylesheet">
    </head>

<body>

    <?php

    if (isset($content) && isset($sub_content)) {
        $this->render('blocks/clients/header', $sub_content);
        $this->render($content, $sub_content);
        $this->render('blocks/clients/footer');
    } else {
        $this->render('blocks/clients/header');
        $this->render('home/home');
        $this->render('blocks/clients/footer');
    }
    ?>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/easing/easing.min.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/waypoints/waypoints.min.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/lightbox/js/lightbox.min.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/lib/owlcarousel/owl.carousel.min.js"></script>
    <!-- Template Javascript -->
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/js/main.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/node_modules/toastr/toastr.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/js/products.js"></script>
    <script src="<?php echo _WEB_ROOT; ?>/public/assets/clients/js/carts.js"></script>

</script>
</body>
</html>