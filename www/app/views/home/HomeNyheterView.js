App.views.HomeNyheter = Ext.extend(Ext.Panel, {

   html: '<a href="#News/index" class="menu-item">News</a>',
   /*'<a href="#Home/about" class="menu-item">About</a>',*/
   
   scroll: 'vertical',
   //itemTpl: '{title}, <span class="date">{date}</date>',
   //styleHtmlContent: true,
   //style: 'background: #d8e2ef',                                       
   dockedItems: [
                 {
                 xtype: 'toolbar',
                 title: 'Nyheter',
                 items: [
                         {
                         text: 'Back',
                         itemId: 'backBtn',
                         ui: 'back',
                         },
                         {xtype: 'spacer'},
                         
                         ],
                 },
                 ],         

});
Ext.reg('HomeNyheter', App.views.HomeNyheter);