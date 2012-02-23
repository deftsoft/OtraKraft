App.views.HomeAnleggene = Ext.extend(Ext.Panel, {
  // scroll: 'vertical',
   //styleHtmlContent: true,
  // style: 'background: #d8e2ef',
    html:  '<div class="header">'+
                    '<div class="otra_logo">'+
                    '<a href="#">'+
                    '<img src="images/Otra_kraft_logo.png" alt="otr_logo" border="none" />'+
                    '</a></div>'+
                    '<div class="x-toolbar-title">Anleggene</div>'+
                    '<div class="header_right_logo">'+
                    '<a href="#">'+
                    '<img src="images/otteraaens_logo.png" alt="otteraaens_logo" border="none" />'+
                    '</a></div>'+
                    '</div>'+
                    '<div class="main_center">'+
                    '<div class="center">'+
                    '<div class="gallery_wrap">'+
                    '<div class="gallery_wrap_div1">'+
                    '<div class="gallery_wrap_div1_td1">'+
                    '<span class="gallery_img">'+
                    '<a href="#Home/brokkeKraft"><img src="images/botsvatn.png" alt="botsvatn" border="none"/></a>'+
                    '</span> <span class="gallery_img_txt"><a href="#Home/brokkeKraft">Botsvatn</a></span> </div>'+
                    '<div class="gallery_wrap_div1_td2">'+
                    '<span class="gallery_img">'+
                    '<a href="#"><img src="images/brokke_img.png" alt="brokke_img" border="none"/>'+
                    '</a></span> <span class="gallery_img_txt"><a href="#">Brokke Kraftverk</a></span> </div>'+
                    '</div>'+
                    '<div class="gallery_wrap_div1">'+
                    '<div class="gallery_wrap_div1_td1">'+
                    '<span class="gallery_img">'+
                    '<a href="#"><img src="images/dammer_img.png" alt="dammer_img" border="none"/></a></span> <span class="gallery_img_txt"><a href="#">Dammer Vatnedalsvatn</a></span> </div>'+
                    '<div class="gallery_wrap_div1_td2"> <span class="gallery_img"><a href="#"><img src="images/syrtveit.png" alt="syrtveit" border="none" /></a></span> <span class="gallery_img_txt"><a href="#">Syrtveit Fiskeanlegg</a></span> </div>'+
                    '</div>'+
                    '<div class="gallery_wrap_div1">'+
                    '<div class="gallery_wrap_div1_td1"> <span class="gallery_img"><a href="#"><img src="images/urevatn.png" alt="urevatn" border="none" /></a></span> <span class="gallery_img_txt"><a href="#">Urevatn</a></span> </div>'+
                    '<div class="gallery_wrap_div1_td2"> <span class="gallery_img"><a href="#"><img src="images/otra.png" alt="otra" border="none" /></a></span> <span class="gallery_img_txt"><a href="#">Otra</a></span> </div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>',

});
Ext.reg('HomeAnleggene', App.views.HomeAnleggene);