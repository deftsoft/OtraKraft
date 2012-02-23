Ext.regController('Home', {
 
    // index action
	index: function(options)
    {
        if ( ! this.indexView)
        {
            this.indexView = this.render({
                xtype: 'HomeIndex',
            });
        }
      
        this.application.viewport.setActiveItem(this.indexView);
    },
                  
  // nyheter action
  nyheter: function()
  {
                  
      if ( ! this.nyheterView)
      { 
         this.nyheterView = this.render({
             //xtype: 'HomeNyheter',
              xtype: 'HomeNyheter',
                                 
             });
      }
                  
      /* var backBtn = this.application.viewport.query('#backBtn')[0];
       backBtn.hide();
       this.application.viewport.setActiveItem(this.nyheterView options.animation);
       
       */
  this.application.viewport.setActiveItem(this.nyheterView);
  },
  
  // anleggene action
  anleggene: function()
  {
      if ( ! this.anleggeneView)
        { 
         this.anleggeneView = this.render({
           xtype: 'HomeAnleggene',
         });
        }
  
  this.application.viewport.setActiveItem(this.anleggeneView);
  },
  // informasjon action
  informasjon: function()
  {
         if ( ! this.informasjonView)
      {  
       this.informasjonView = this.render({
          xtype: 'HomeInformasjon',
       });
      }
  
  this.application.viewport.setActiveItem(this.informasjonView);
  },                
    
  // nyheter action
  brokkeKraft: function()
  {
  
        if ( ! this.brokkeKraftView)
                  { alert('asdasdsdasdasdasdsadas');
        this.brokkeKraftView = this.render({
         //xtype: 'HomeNyheter',
         xtype: 'HomeBrokkeKraft',
         
         });
        }
  
  
  this.application.viewport.setActiveItem(this.brokkeKraftView);
  },         
                  
    // about action
    about: function()
    {
        if ( ! this.aboutView)
        {
            this.aboutView = this.render({
                xtype: 'HomeAbout',
            });
        }
     
        var backBtn = this.application.viewport.query('#backBtn')[0];
        backBtn.show();
        
        backBtn.setHandler(function()
		{
        	Ext.dispatch({
        	    controller: 'Home',
        	    action: 'index',
        	    historyUrl: 'Home/index',
        	    //
        	    animation: {
        	        type: 'slide',
        	        reverse: true,
        	    },
        	});
		});
        
        this.application.viewport.setActiveItem(this.aboutView);
    },
});