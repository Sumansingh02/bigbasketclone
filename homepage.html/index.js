// slide1 start.....................................

let i=0;
let id;
let timer=3000;
let images=[];

images[0]="https://www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_150622_Bangalore.jpg";
images[1]="https://www.bigbasket.com/media/uploads/banner_images/140622_fresho_days_fnv_Bangalore_1600x460_14thjun22.jpg";
images[2]="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_160622.jpeg";
images[3]="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg";
images[4]="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg";
images[5]="https://www.bigbasket.com/media/uploads/banner_images/hpc_cmc_cold-pressed_460_140622.jpg";
images[6]="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m__bcd_tasties-origins_460-250522.jpg";
images[7]="https://www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg";

id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
 

},timer)

function changeimage1(){
let img1=document.set1
clearInterval(id)
img1.src=images[0]
i=1;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage2(){
let img2=document.set1
clearInterval(id)
img2.src=images[1]
i=2;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage3(){
let img3=document.set1
clearInterval(id)
img3.src=images[2]
i=3;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage4(){
let img4=document.set1
clearInterval(id)
img4.src=images[3]
i=4;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage5(){
let img5=document.set1
clearInterval(id)
img5.src=images[4]
i=5;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage6(){
let img6=document.set1
clearInterval(id)
img6.src=images[5]
i=6;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage7(){
let img7=document.set1
clearInterval(id)
img7.src=images[6]
i=7;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}

function changeimage8(){
let img8=document.set1
clearInterval(id)
img8.src=images[7]
i=8;
id=setInterval(function(){
  document.set1.src=images[i]
  if(i===images.length-1){
      i=0
  }
  else{
     i++; 

  }
},timer)
}


// slide1 end..........................................

//slide2 start........................................

// let i=0;
let id1;
let timer1=2000;
let images1=[];

images1[0]="https://www.bigbasket.com/media/uploads/banner_images/cp_pbs_entrypoint_1130x400_060622.jpg";
images1[1]="https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_hardinsasta_bangalore_400_150622.jpeg";


id1=setInterval(function(){
  document.set2.src=images1[i]
  if(i===images1.length-1){
      i=0
  }
  else{
     i++; 

  }
 

},timer1)

// slide2 end.........................................

// slide3 start.............................................

let id2;
let timer2=2000;
let images2=[];

images2[0]="https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250522_400-250522.jpg";
images2[1]="https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250522_400-250522.jpg";
images2[2]="https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250522_400-250522.jpg";
images2[3]="https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250522_400-250522.jpg";


id2=setInterval(function(){
  document.set3.src=images2[i]
  if(i===images2.length-1){
      i=0
  }
  else{
     i++; 

  }
 

},timer2)

// slide3 end.................................................

// slide4 start..................................................
let id3;
let timer3=2000;
let images3=[];

images3[0]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_150622.jpg";
images3[1]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_tuna-deiled_cxnp-9689_400_150622.jpg";
images3[2]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_anda-pav_cxnp-9690_400_150622.jpg";
images3[3]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_shakshuka-9691_400_150622.jpg";
images3[4]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_cheesy-scrambled_cxnp-9692_400_150622.jpg";
images3[5]="https://www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_150622.jpg";


id3=setInterval(function(){
  document.set4.src=images3[i]
  if(i===images3.length-1){
      i=0
  }
  else{
     i++; 

  }
 

},timer3)

// slide4 end....................................................