function start() {
	getDanhMuc();
	getSanPham();
}

const url = 'http://localhost:3000/'
const axiosAPI = async(body) => axios(body)

const getDanhMuc = async() =>{
    const urlCatalog = url + 'danhmuc'
    const body = {
        url : urlCatalog,
        method : 'get',
        responseType : 'json'
    
    }
    const resp = await axiosAPI(body)
    showDanhMuc(resp.data)
}

const showDanhMuc = (data)=>{
	const element = document.getElementById("danhmuc");
	element.innerHTML = data.map((item) =>{
		var link = `category.html?catalog=${item.id}`;
		return `                        
				<li class="filter-list" id="nike" name="brand"><label for="nike">
				<a href="${link}">${item.name}</a></label>
				</li>
				`
	}).join('');
		
};

// const getSanPham = async() =>{ 
// 	const urlCatalog = url + 'sanpham'
//     const body = {
//         url : urlCatalog,
//         method : 'get',
//         responseType : 'json'
    
//     }
// 	const resp = await axiosAPI(body)
//     showSanPham(resp.data)
	
    
// }

const getSanPham = async() =>{
	var querryString = window.location.search;
	var urlParam = new URLSearchParams(querryString);
	if(urlParam.has("catalog")){
		var catalogid = urlParam.get("catalog");
		const sanPham = await getSanPhambyID(catalogid);
		showSanPhambyID(sanPham);
		
	}else{
		const allSanPham = await getSanPhambyID('all')
		showSanPhambyID(allSanPham);
		
	}
	
}

// const getSanPham = async() => {
//     var querryString = window.location.search;
//     var urlParam = new URLSearchParams(querryString);
//     if (urlParam .has("catalog")) {
//         var catalogid = urlParam.get("catalog");
//         getSanPhamID(catalogid);
//     }else{
//         showSanPham();
//     }
// }

const showSanPham = async(data) => {
    const element = document.getElementById('sanpham')
	element.innerHTML = data.map((item) =>{
		
		return `
		<div class="col-lg-4 col-md-6">
					<div class="single-product">
						<img class="img-fluid" src="image/${item.image}" alt="">
						<div class="product-details">
							<h6>${item.name}</h6>
							<div class="price">
								<h6>${item.price}</h6>
								<h6 class="l-through">${item.price2}</h6>
							</div>
							<div class="prd-bottom">

								<a href="" class="social-info">
									<span class="ti-bag"></span>
									<p class="hover-text">add to bag</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-heart"></span>
									<p class="hover-text">Wishlist</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-sync"></span>
									<p class="hover-text">compare</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-move"></span>
									<p class="hover-text">view more</p>
								</a>
							</div>
						</div>
					</div>
			</div>
		`
	}).join('')
}

const getSanPhambyID = async(catalogid) =>{
    const urlCatalog = url + 'sanpham/' + catalogid
    const body = {
        url : urlCatalog,
        method : 'get',
        responseType : 'json'
    }
    const resp = await axiosAPI(body)
    showSanPhambyID(resp.data)
}

const showSanPhambyID = (data) =>{
	const element = document.getElementById("sanpham")
	element.innerHTML = data.map((item) =>{
		return`
		<div class="col-lg-4 col-md-6">
					<div class="single-product">
						<img class="img-fluid" src="image/${item.image}" alt="">
						<div class="product-details">
							<h6>${item.name}</h6>
							<div class="price">
								<h6>${item.price}</h6>
								<h6 class="l-through">${item.price2}</h6>
							</div>
							<div class="prd-bottom">

								<a href="" class="social-info">
									<span class="ti-bag"></span>
									<p class="hover-text">add to bag</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-heart"></span>
									<p class="hover-text">Wishlist</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-sync"></span>
									<p class="hover-text">compare</p>
								</a>
								<a href="" class="social-info">
									<span class="lnr lnr-move"></span>
									<p class="hover-text">view more</p>
								</a>
							</div>
						</div>
					</div>
		</div>
		`
	}).join('');
}
