import { Component } from '@angular/core';
import {Item} from './Item';
import {Restaurant} from './Restaurants'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodApp';
  Menu:Item[]=[];
  RestaurantList:Restaurant[]=[];
  constructor() {
    // Restaurant List Initialised
    this.RestaurantList.push(new Restaurant('McDonalds',[],'https://png.pngtree.com/element_origin_min_pic/17/04/15/8171afafc8883bff71189f38998d7712.jpg'));
    this.RestaurantList.push(new Restaurant('Coastal Aroma',[],'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/n/d/p33425-150478738659b13bba7f8a0.jpg?w=1200'));
    this.RestaurantList.push(new Restaurant('Maplai',[],'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/v/j/p33227-150779585159df238b3508b.jpg?w=1200&q=100'));
    this.RestaurantList.push(new Restaurant('Cafe Coffee Day',[],'https://admin.mbarendezvous.com/uploadimages/bannerimage_1463407053.jpg'));
    
    // Mcdonalds
    this.Menu.push(new Item('McDonalds','Chicken McGrill',47,'http://3.bp.blogspot.com/-8NAthcrVazY/UOYMuQgmUfI/AAAAAAAAABA/4USe0q4yRoo/s1600/chicken-mcgrill-burger.jpg','NV'));
    this.Menu.push(new Item('McDonalds','Masala Grill',58,'http://4.bp.blogspot.com/-FsbmaIOZsa4/U7rJxpQrDEI/AAAAAAAAKeQ/KYq4GkH9pec/s1600/masala-grill-veg.jpg','V'));
    this.Menu.push(new Item('McDonalds','Veg Maharaja Mac',118,'http://mcdonaldsblog.in/wp-content/uploads/2016/11/maharaja-mac-story_McDonalds_081116.jpg','V'));
    this.Menu.push(new Item('McDonalds','Chicken Maharaja Mac',158,'http://voguesugar.com/wp-content/uploads/2014/03/Chicken-Maharaja-Mac-in-India.jpg','V'));
    this.Menu.push(new Item('McDonalds','French Fries',58,'https://recipes.timesofindia.com/photo/54659021.cms','V'));
    this.Menu.push(new Item('McDonalds','Mspicy Chicken',138,'http://images.summitmedia-digital.com/spotph/images/2018/09/13/mcspicy650.jpg','NV'));
    this.Menu.push(new Item('McDonalds','Mcspicy Paneer',128,'https://5.imimg.com/data5/OR/KH/MY-33353830/mcspicy-paneer-burger-500x500.png','V'));
    this.Menu.push(new Item('McDonalds','Filet O Fish',158,'https://i.kinja-img.com/gawker-media/image/upload/s--z0QGZsbB--/c_scale,f_auto,fl_progressive,q_80,w_800/qxapq7y76btrv0fcwgb9.jpg','NV'));
    this.Menu.push(new Item('McDonalds','McAloo Tikki',38,'http://mcdonaldsblog.in/wp-content/uploads/2018/05/McAloo-tikki.jpg','V'));
    this.Menu.push(new Item('McDonalds','McVeggie',58,'https://d701vexhkz032.cloudfront.net/media/images/menu-content/BR/linha-signature/mcveggie.png','V'));
   // Coastal Aroma
    this.Menu.push(new Item('Coastal Aroma','Sweet Corn Prawn Soup',99,'http://ksmartstatic.sify.com/cmf-1.0.0/appflow/bawarchi.com/Image/oesoh3gddiedh_bigger.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Caesar Salad Chicken',100,'https://www.afamilyfeast.com/wp-content/uploads/2012/12/Caesar-Salad-with-Grilled-Caesar-Chicken-1.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Sura Puttu',299,'https://images.pachakam.com/RcpImags/SuraPuttu-7111-1.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Phuket Fish',299,'https://www.sankrantihotels.com/wp-content/uploads/2017/12/PHUKET-FISH.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Chicken 97',249,'https://www.leahcookskosher.com//system_files/recipe/main_photo/thumb508/97.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Special Coastal Aroma Platter',449,'https://media-cdn.tripadvisor.com/media/photo-s/11/4b/f1/be/img-20170506-142257-hht.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Gobi 65',149,'https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/gobi-65-recipe-1.jpg','V'));
    this.Menu.push(new Item('Coastal Aroma','Prawn Sizzler',399,'http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Citrus_Sizzling_Prawns_foodfood.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Fish Biriyani',220,'http://www.ndtv.com/cooks/images/biryani.4.jpg','NV'));
    this.Menu.push(new Item('Coastal Aroma','Veg Fried Rice',139,'https://www.whiskaffair.com/wp-content/uploads/2017/10/Vegetable-Fried-Rice-3.jpg','V'));
    //Maplai
    this.Menu.push(new Item('Maplai','Maplai Mutton Biriyani',290,'https://i.ytimg.com/vi/HI2-u2zu8Ss/maxresdefault.jpg','NV'));
    this.Menu.push(new Item('Maplai','Veg Thalassery Biriyani',210,'https://i0.wp.com/mypullzone-9vexd6dl53at.netdna-ssl.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg?fit=3563%2C2976&ssl=1','V'));
    this.Menu.push(new Item('Maplai','Nethili Fry',220,'https://i.ytimg.com/vi/PRVEn4DIKKw/maxresdefault.jpg','NV'));
    this.Menu.push(new Item('Maplai','Vanjaram Fry',320,'http://www.thulasihotels.in/wp-content/uploads/2018/05/1-1.jpg','NV'));
    this.Menu.push(new Item('Maplai','Guntur Prawn Fry',320,'http://1.bp.blogspot.com/-IOwp3Ld12HM/T8dnkLLsv2I/AAAAAAAAOGg/cfHIIMMFFyA/s1600/Prawn+Masala+Fry+-+1.jpg','NV'));
    this.Menu.push(new Item('Maplai','Chicken Tikka',250,'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Chicken_Tikka_Recipe_.jpg','NV'));
    this.Menu.push(new Item('Maplai','Naatu Kozhi Fry',320,'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Chettinadu_Kozhi_Varuval.jpg','NV'));
    this.Menu.push(new Item('Maplai','Fish Biriyani',220,'https://www.whiskaffair.com/wp-content/uploads/2014/08/Fish-Biryani-5.jpg','NV'));
    this.Menu.push(new Item('Maplai','Prawn Podiyal',420,'http://2.bp.blogspot.com/-GH5Kg_E2wUU/Tusw-s6ueHI/AAAAAAAADco/1HsmenmXbN0/s640/Prawn+fry.JPG','NV'));
    this.Menu.push(new Item('Maplai','Veg Meals',320,'https://www.mangoo.in/wp-content/uploads/2018/01/VEG-MEALS.jpg','V'));
    // Cafe Coffee Day
    this.Menu.push(new Item('Cafe Coffee Day','Espresso',120,'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg/1200px-Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Cappucino',150,'https://www.nespresso.com/ncp/res/uploads/recipes/Nespresso_MakeFilms_Stills_Cappuccino.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Vanilla Latte',150,'https://www.torani.com/sites/default/files/recipes/illustration/Torani%20Latte.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Cafe Americano',160,'http://drinsomniacs.com/wp-content/uploads/2017/04/cafe-americano-coffee.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Cafe Mocha',150,'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/9/4/YW0905H_cafe-mocha_s4x3.jpg.rend.hgtvcom.616.462.suffix/1484024437478.jpeg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Crunchy Frappe',180,'https://www.cafecoffeeday.com/sites/default/files/Crunchy-Frappe_0.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Tropical Iceberg',150,'https://www.cafecoffeeday.com/sites/default/files/Tropical-Iceberg_0.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Cool Blue',150,'https://www.cafecoffeeday.com/sites/default/files/Cool-blue.jpg','V'));
    this.Menu.push(new Item('Cafe Coffee Day','Roasted Chicken and Cheese Sandwich',190,'http://cdn3.dealnyou.in/img/original/ccd-tandoori-chicken-sandwich.jpg','NV'));
    this.Menu.push(new Item('Cafe Coffee Day','Egg Wrap',150,'https://www.cafecoffeeday.com/sites/default/files/Egg-Wrap_2.jpg','NV'));
  }

  ngOnInit() {
    localStorage.setItem( 'Menu',JSON.stringify(this.Menu));
    localStorage.setItem( 'Restaurant',JSON.stringify(this.RestaurantList));
  }

}

