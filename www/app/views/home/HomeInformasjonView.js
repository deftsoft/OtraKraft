App.views.HomeInformasjon = Ext.extend(Ext.Panel, {
  // scroll: 'vertical',
   //styleHtmlContent: true,
  // style: 'background: #d8e2ef',
    html: '<div class="header">'+
                     '<div class="x-toolbar-title">Mer informasjon</div>'+
                     '</div>'+
                     '<div class="omm_oss_background">'+
         	         '<div class="omm_oss_oss_middle_cont">'+
              	     '<div class="omm_oss_oss_middle_main_cont">'+
                     '<div class="omm_oss_page_cont">'+
                     '<div class="omm_oss_page_main_right">'+
                     '<div class="omm_oss_page_main_right_inner_left">Ring Oss</div>'+
                     '<div class="omm_oss_page_main_right_inner_image"><img src="images/pil.png" width="9" height="14" /></div>'+
                     '</div>'+
                     '</div>'+
                     '<div class="omm_oss_page_cont">'+
                     '<div class="omm_oss_page_main_right">'+
                     '<div class="omm_oss_page_main_right_inner_left">Mail Oss</div>'+
                     '<div class="omm_oss_page_main_right_inner_image"><img src="images/pil.png" width="9" height="14" /></div>'+
                     '</div>'+
                     '</div>'+
                     '<div class="omm_oss_page_cont">'+
                     '<div class="omm_oss_page_main_right">'+
                     '<div class="omm_oss_page_main_right_inner_left">Finn oss pa kart</div>'+
                     '<div class="omm_oss_page_main_right_inner_image"><img src="images/pil.png" width="9" height="14" /></div>'+
                     '</div>'+
                     '</div>'+
                     '<div class="omm_oss_page_cont" style="border-bottom:none;">'+
                     '<div class="omm_oss_page_main_right">'+
                     '<div class="omm_oss_page_main_right_inner_left">vassforinger</div>'+
                     '<div class="omm_oss_page_main_right_inner_image"><img src="images/pil.png" width="9" height="14" /></div>'+
                     '</div>'+
                     '</div>'+
                     '</div>'+
                     '</div>'+
                     '</div>'+
                     '</div>',


});
Ext.reg('HomeInformasjon', App.views.HomeInformasjon);