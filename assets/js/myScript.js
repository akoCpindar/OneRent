/**
 * Created by Pindar C. Jimenez on 28/06/2017.
 */

var display_method;
var display;

$(function(){ /* short for $(document).ready(function(){ */

    //Preload run
    $(".preload").fadeOut(2000, function() {
        $(".content").fadeIn(1000);
    });

    list(); // here is to display all properties list
});

//List properties Function
function list() {
    if(display_method == null || display_method == ''){
        $.ajax({
            type:    'POST',
            url:     'http://www.onerent.co/api/Property/availableProperties',
            success: function(data){
                var list = '';
                var img = '';
                var imgL = '';
                for (var i = 0; i < data.length; i++) {
                    if (data[i].defaultImageId) {
                        img = data[i].defaultImage.medium;
                        imgL = data[i].defaultImage.large;
                    } else {
                        img = 'assets/img/no-images.png';
                        imgL = 'assets/img/no-images.png';
                    }

                    list =  '<div class="col-md-3 col-sm-3 filter ' + data[i].type.split(' ').join('-') + ' item">' +
                        '<div class="panel panel-default">' +
                        '<div class="panel-body">' +
                        '<a href="#" onclick="enlarge(\'' + imgL + '\')"><img id="imageresource" class="img-responsive img-thumbnail" src="' + img + '"></a>' +
                        '<h4 class="name"><b> ' + data[i].address + ' </b></h4>' +
                        '<h4 class="name"> ' + data[i].city + ', ' + data[i].zip + ', ' + data[i].state + '</h4>' +
                        '<p class="price text-right"><span class="glyphicon glyphicon-usd align-middle"> </span><strong> ' + data[i].targetRent + ' </strong></p>' +
                        '<a href="#" class="btn btn-primary btn-sm btn-labeled" onclick="product_view(\'' + data[i].id + '\')">View More</a>' +
                        '</div>' +
                        '</div>' +
                        '</div>';

                    $('#products').append(list);
                }
            }
        });
    }
}

function enlarge(img){
    $('#imagepreview').attr('src', ''); // here asign the image src to empty
    $('#imagepreview').attr('src', img); // here asign the image to the modal when the user click the enlarge link
    $('#enlarge_img').modal('show'); // imagemodal is the id attribute assigned to the bootstrap modal, then i use the show function
}

function product_view(id){
    get_specific_product(id); // this function is to select specific product/properties selected
}

function search(){
    var search = document.getElementById('search').value;
    if(search == '' || search == null){
        $("#products").empty(); //clean the append
        display_method = ''; //clear the display method
        list(); //display list
    } else {
        mysearch(search); // call the search function
    }
}

function mysearch(search){
    display_method = 'search';
    if(display_method == 'search') {
        $("#products").empty(); //clean the append

        $.ajax({
            type:    'POST',
            url:     'http://www.onerent.co/api/Property/availableProperties',
            success: function(data){
                var list = '';
                var img = '';
                var imgL = '';
                var count = 0;
                for (var i = 0; i < data.length; i++) {
                    var str = '' + data[i].interiorFeatures + '';
                    var n = str.includes(search);
                    if(n){
                        count++;
                        if (data[i].defaultImageId) {
                            img = data[i].defaultImage.medium;
                            imgL = data[i].defaultImage.large;
                        } else {
                            img = 'assets/img/no-images.png';
                            imgL = 'assets/img/no-images.png';
                        }

                        list =  '<div class="col-md-3 col-sm-3 filter ' + data[i].type.split(' ').join('-') + ' item">' +
                            '<div class="panel panel-default">' +
                            '<div class="panel-body">' +
                            '<a href="#" onclick="enlarge(\'' + imgL + '\')"><img id="imageresource" class="img-responsive img-thumbnail" src="' + img + '"></a>' +
                            '<h4 class="name"><b> ' + data[i].address + ' </b></h4>' +
                            '<h4 class="name"> ' + data[i].city + ', ' + data[i].zip + ', ' + data[i].state + '</h4>' +
                            '<p class="price text-right"><span class="glyphicon glyphicon-usd align-middle"> </span><strong> ' + data[i].targetRent + ' </strong></p>' +
                            '<a href="#" class="btn btn-primary btn-sm btn-labeled" onclick="product_view(\'' + data[i].id + '\')">View More</a>' +
                            '</div>' +
                            '</div>' +
                            '</div>';

                        $('#products').append(list);
                    }
                }
                if (count == 0) {
                    $('#products').append("Sorry! No Data Found..");
                }
            }
        });

    } else {
        display_method = '';
        list();
    }
}

function get_specific_product(id){
    $.ajax({
        type:    'POST',
        url:     'http://www.onerent.co/api/Property/availableProperties',
        success: function(data){
            var list = '';
            var img = '';
            for (var i = 0; i < data.length; i++) {
                if(data[i].id == id) {

                    if (data[i].defaultImageId) {
                        img = data[i].defaultImage.medium;
                    }
                    else
                        img = 'assets/img/no-images.png';

                    //alert(id);
                    list =  '<img width="100%" src="' + img + '" class="img-responsive">' +
                        '<div class="col-md-12">' +
                        '<h4 class="text-right"><b>' + data[i].address + ', ' + data[i].city + ' ' + data[i].zip + ' ' + data[i].state + '</b></h4>' +
                        '<h5 class="text-right"><b>Type: </b>' + data[i].type + '</h5><br>' +
                        '<p><b>Description: </b>' + data[i].description + '</p>' +
                        '<p><b>Appliances: </b>' + data[i].appliances + '</p>' +
                        '<p><b>Interior Features: </b>' + data[i].interiorFeatures + '</p>' +
                        '<p><b>Landlord Responsible Utilities: </b>' + data[i].landlordResponsibleUtilities + '</p>' +
                        '<p><b>Tenant Responsible Utilities: </b>' + data[i].tenantResponsibleUtilities + '</p>' +
                        '<p><b>Washer Dryers: </b>' + data[i].washerDryer + '</p>' +
                        '</div>';

                    $('#product_content').html(list);

                    $('#product_view').modal('show'); // show bootstrap modal when complete loaded
                }
            }
        }
    });
}