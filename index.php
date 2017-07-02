<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OneRent</title>

    <!-- CSS CODE -->
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/styles.min.css">
</head>

<body>
    <div class="container">
        <div class="row">
        	<!-- List of Category -->
            <div class="col-lg-9 col-md-6 col-sm-7 col-xs-12 article-selection" id="article-selection">
                <button class="btn btn-primary btn-sm raised round filter-button" type="button" data-filter="all">ALL </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button" data-filter="Apartment">
                    Apartment
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button" data-filter="House">House
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button" data-filter="Condo">Condo
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button" data-filter="Town-House">
                    Town-House
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button"
                        data-filter="Single-Family-Home">Single Family Home
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button"
                        data-filter="Duplex-/-Triplex">Duplex / Triplex
                </button>
                <button class="btn btn-info btn-sm raised round filter-button" type="button" data-filter="Fourplex">
                    Fourplex
                </button>
            </div>

            <!-- Search Box -->
            <div class="col-lg-3 col-md-3 col-sm-4">
                <div class="search-form">
                    <div class="input-group">
                        <div class="input-group-addon"><span><i class="glyphicon glyphicon-search"></i></span></div>
                        <input class="form-control" type="text" id="search" placeholder="I am looking for..">
                        <div class="input-group-btn">
                            <button class="btn btn-default" onclick="search()">Search </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Loading of preload of page -->
        <div class="preload text-center">
            <img src="http://i.imgur.com/KUJoe.gif">
        </div>
		
		<!-- List of Products/Properties -->
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="row products" id="products">

                </div>
            </div>
        </div>
    </div>

    <!-- JAVASCRIPT CODE -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/script.min.js"></script>
    <script src="assets/js/myScript.js"></script>


    <!-- Creates the bootstrap modal where the image will appear -->
    <div id="enlarge_img" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <img width="100%" id="imagepreview" src="" class="img-responsive">
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade product_view" id="product_view" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div id="product_content">

                        </div>
                        <br>
                        <div class="col-md-12 text-right">
                            <button type="button" class="btn btn-info pull-left" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>
                            <button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-heart"></span> Add To Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>