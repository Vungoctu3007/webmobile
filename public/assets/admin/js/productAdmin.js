
function openDetailModal(productId) {
    $.ajax({
        type: "GET",
        url: `http://localhost/shop/Product_Admin/detailProductId?product_id=${productId}`,
        success: function (data) {
            var html = `
                <img id="productImage" src="../public/assets/clients/img/${data.data.product_image}" alt="Product Image" style="max-width: 150px;">
                <h5 id="productName">Product Name: ${data.data.product_name}</h5>
                <p><strong>Category Name:</strong> <span id="categoryName">${data.data.category_name}</span></p>
                <p><strong>Description:</strong> <span id="description">${data.data.product_description}</span></p>
                <p><strong>RAM:</strong> <span id="ram">${data.data.product_ram}</span></p>
                <p><strong>ROM:</strong> <span id="rom">${data.data.product_rom}</span></p>
                <p><strong>Battery:</strong> <span id="battery">${data.data.product_battery}</span></p>
                <p><strong>Screen:</strong> <span id="screen">${data.data.product_screen}</span></p>
                <p><strong>Quantity:</strong> <span id="quantity">${data.data.quantity}</span></p>
                <p><strong>Made In:</strong> <span id="madeIn">${data.data.product_made_in}</span></p>
                <p><strong>Year Produce:</strong> <span id="yearProduce">${data.data.product_year_produce}</span></p>
                <p><strong>Time Insurance:</strong> <span id="timeInsurance">${data.data.product_time_insurance}</span> months</p>
                <p><strong>Price:</strong> <span id="price">${data.data.product_price}</span></p>
            `;
            $('#productId').val(productId);
            $('#productDetails').html(html);
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function updateProduct() {
    var productId = $('#productId').val();
    var productName = $('#productNameUpdate').val();
    var productDescription = $('#productDescriptionUpdate').val();
    var productRam = $('#ramUpdate').val();
    var productRom = $('#romUpdate').val();
    var productBattery = $('#batteryUpdate').val();
    var productScreen = $('#screenUpdate').val();
    var madeIn = $('#madeInUpdate').val();
    var yearProduce = $('#yearProduceUpdate').val();
    var timeInsurance = $('#timeInsuranceUpdate').val();
    var price = $('#priceUpdate').val();

    $.ajax({
        type: "POST",
        url: `http://localhost/shop/Product_Admin/update`,
        data: {
            product_id: productId,
            product_name: productName,
            product_description: productDescription,
            product_ram: productRam,
            product_rom: productRom,
            product_battery: productBattery,
            product_screen: productScreen,
            product_made_in: madeIn,
            product_year_produce: yearProduce,
            product_time_insurance: timeInsurance,
            product_price: price
        },
        success: function (response) {
            var data = JSON.parse(response);
            if (data.status === 'success') {
                alert("Successfully");
                location.reload();

            }
            else {
                alert(data.message);
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }

    });
}


function openUpdateModal(productId) {
    $.ajax({
        type: "GET",
        url: `http://localhost/shop/Product_Admin/updateProductId?product_id=${productId}`,
        success: function (data) {
            toastr.success('Nhập thông tin khách hàng thành công');
            var html = `
                    <div class="mb-3">
                        <label for="productNameUpdate" class="form-label">Product Name:</label>
                        <input type="text" class="form-control" id="productNameUpdate" value="${data.data.product_name}" required>
                    </div>
                    <div class="mb-3">
                        <label for="categoryNameUpdate" class="form-label">Category Name:</label>
                        <input type="text" class="form-control" id="categoryNameUpdate" value="${data.data.category_name}" disabled>
                    </div>
                    <div class="mb-3">
                        <label for="productDescriptionUpdate" class="form-label">Description:</label>
                        <input type="text" class="form-control" id="productDescriptionUpdate" value="${data.data.product_description}" required>
                    </div>
                    <div class="mb-3">
                        <label for="ramUpdate" class="form-label">RAM (Gb):</label>
                        <input type="text" class="form-control" id="ramUpdate" value="${data.data.product_ram}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="romUpdate" class="form-label">ROM (Gb):</label>
                        <input type="text" class="form-control" id="romUpdate" value="${data.data.product_rom}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="batteryUpdate" class="form-label">Battery (Mh):</label>
                        <input type="text" class="form-control" id="batteryUpdate" value="${data.data.product_battery}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="screeUpdate" class="form-label">Screen:</label>
                        <input type="text" class="form-control" id="screenUpdate" value="${data.data.product_screen}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="madeInUpdate" class="form-label">Made In:</label>
                        <input type="text" class="form-control" id="madeInUpdate" value="${data.data.product_made_in}" required>
                    </div>
                    <div class="mb-3">
                        <label for="yearProduceUpdate" class="form-label">Year Produce:</label>
                        <input type="number" class="form-control" id="yearProduceUpdate" value="${data.data.product_year_produce}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="timeInsuranceUpdate" class="form-label">Time Insurance (months):</label>
                        <input type="number" class="form-control" id="timeInsuranceUpdate" value="${data.data.product_time_insurance}"  required>
                    </div>
                    <div class="mb-3">
                        <label for="priceUpdate" class="form-label">Price:</label>
                        <input type="text" class="form-control" id="priceUpdate" value="${data.data.product_price}"  required>
                    </div>
                `;
            $('#productUpdates').html(html);
            $('#productId').val(productId);
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    })
}

let currentPage = 1;
let total_page = 0;

$(function () {
    load_data(currentPage);
});

function load_next_page() {
    currentPage++;
    if (currentPage > total_page) {
        currentPage = total_page;
    }
    if (isSoftPagination()) {
        loadDataSoft(currentPage); // Chỉ cần truyền trang
    } else if ($('#search-product-input').val() !== '') {
        loadDataSearch(currentPage); // Truyền trang cho tìm kiếm
    } else {
        load_data(currentPage);
    }
}

function load_prev_page() {
    currentPage--;
    if (currentPage < 1) {
        currentPage = 1;
    }
    if (isSoftPagination()) {
        loadDataSoft(currentPage); // Chỉ cần truyền trang
    } else if ($('#search-product-input').val() !== '') {
        loadDataSearch(currentPage); // Truyền trang cho tìm kiếm
    } else {
        load_data(currentPage);
    }
}

function isSoftPagination() {
    return Object.keys(sortOrder).length > 0;
}



function load_data(page) {
    $.ajax({
        url: `http://localhost/shop/Product_Admin/loadData?page=${page}`, // Sửa pageSize thành số phần tử bạn muốn hiển thị trên mỗi trang
        method: "GET",
        success: function (data) {
            create_table(data.data);
            total_page = data.total_page;
            updatePagination();
        }
    });
}


function updatePagination() {
    $('#current_page').text(currentPage);
    $('#total_pages').text(total_page);
    $('#pagination').empty();
    for (let i = 1; i <= total_page; i++) {
        $('#pagination').append(`<li class="page-item"><a class="page-link" onclick="load_data(${i})">${i}</a></li>`);
    }
}

function create_table(data) {
    $('#contentDataProduct').empty();

    if (Array.isArray(data)) {
        data.forEach(item => {
            $('#contentDataProduct').append(`
                    <tr>
                        <td><img src='../public/assets/clients/img/${item.product_image}' alt='Product Image' style='width:130px; height:auto'></td>
                        <td>${item.category_name}</td>
                        <td>${item.product_name}</td>
                        <td>${item.stock || item.quantity}</td>
                        <td>${item.made_in || item.product_made_in}</td>
                        <td>${item.year_produce || item.product_year_produce}</td>
                        <td>${item.time_insurance || item.product_time_insurance}</td>
                        <td>${item.price || item.product_price}</td>
                        <td>
                            <button class='btn btn-primary me-1 mb-3 w-100 mt-3' data-bs-toggle='modal' data-bs-target='#formDetailProduct' onclick='openDetailModal(${item.id || item.product_id})'>Detail</button>
                            <button class='btn btn-primary me-1 mb-3 w-100 mt-3' data-bs-toggle='modal' data-bs-target='#formUpdateProduct' onclick='openUpdateModal(${item.id || item.product_id})'>Update</button>
                        </td>
                    </tr>
                `);
        });
    } else {
        console.error('Data is not an array');
    }
}
var sortOrder = {};
function clearSortOrder() {
    sortOrder = {};
}
function softInfo(column, page) {
    if (!sortOrder[column]) {
        sortOrder[column] = 'asc';
    } else {
        sortOrder[column] = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost/shop/Product_Admin/soft',
        data: { columnProduct: column, sortOrderProduct: sortOrder[column], page: currentPage },
        success: function (response) {
            create_table(response.data);
            updatePaginationSort(response.total_page); // Corrected function call
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

function loadDataSoft(page) {
    // Lấy tên cột và thông tin soft từ biến sortOrder
    var column = Object.keys(sortOrder)[0];
    var sortOrderValue = sortOrder[column];

    $.ajax({
        url: `http://localhost/shop/Product_Admin/soft`,
        method: "POST",
        data: { columnProduct: column, sortOrderProduct: sortOrderValue, page: page },
        success: function (data) {
            create_table(data.data);
            updatePaginationSort(data.total_page); // Truyền số trang cần cập nhật
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}
function updatePaginationSort(total_page) {
    $('#current_page').text(currentPage);
    $('#total_pages').text(total_page);
    $('#pagination').empty();
    for (let i = 1; i <= total_page; i++) {
        $('#pagination').append(`<li class="page-item"><a class="page-link" onclick="loadDataSoft(${i})">${i}</a></li>`);
    }
}


function searchProduct() {
    var key = document.getElementById('search-product-input').value;
    if (key.trim() === '') {
        load_data(currentPage); // Load lại dữ liệu khi input search trống
    } else {
        $.ajax({
            type: 'POST',
            url: 'http://localhost/shop/Product_Admin/search',
            data: { keyword: key, page: currentPage },
            success: function (response) {
                create_table(response.data);
                currentPage = response.current_page;
                total_page = response.total_page;
                updatePaginationSearch(response.current_page, response.total_page);
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    }
}

function loadDataSearch(page) {
    // Lấy tên cột và thông tin soft từ biến sortOrder
    var key = document.getElementById('search-product-input').value;

    $.ajax({
        url: `http://localhost/shop/Product_Admin/search`,
        method: "POST",
        data: { keyword: key, page: currentPage },
        success: function (data) {
            create_table(data.data);
            updatePaginationSearch(data.current_page, data.total_page); // Truyền số trang cần cập nhật
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}


function updatePaginationSearch(currentPage, total_page) {
    $('#current_page').text(currentPage);
    $('#total_pages').text(total_page);
    $('#pagination').empty();
    for (let i = 1; i <= total_page; i++) {
        $('#pagination').append(`<li class="page-item"><a class="page-link" onclick="loadDataSearch(${i})">${i}</a></li>`);
    }

}
