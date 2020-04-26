
// function to get searched product list by name
export function searchProductByName(productlist, searchtext) {
    let products = productlist.filter(function (product) {
        return product.name.toLowerCase().search(
            searchtext.toLowerCase()) !== -1;
    })
    return products;
}

// function to get sorted product list by price 
export function sortProductByPrice(productlist, sortvalue) {
    let products = [];
    if (sortvalue) {

        if (sortvalue === 1) {
            products = productlist.sort(function (productA, productB) {
                return productA.price.actual - productB.price.actual;
            });
        } else if (sortvalue === 2) {
            products = productlist.sort(function (productA, productB) {
                return productB.price.actual - productA.price.actual;
            });
        } else {
            products = productlist.sort(function (productA, productB) {
                return productB.discount - productA.discount;
            });
        }
    }

    return products;
}

// function to get searched product list by name
export function searchProductByPriceRange(productlist, range) {
    let filterproducts = [];
    let products = [];
    if (range.length === 2) {
        let lowerrange = range[0];
        let higherrange = range[1];
        for (let i = 0; i < productlist.length; i++) {
            if (productlist[i].price.actual >= (lowerrange * 1000) && productlist[i].price.actual <= (higherrange * 1000)) {
                filterproducts.push(productlist[i]);
            }
        }
    }

    if (filterproducts.length > 0) {
        products = filterproducts.sort(function (productA, productB) {
            return productA.price.actual - productB.price.actual;
        });
    }

    return products;
}
