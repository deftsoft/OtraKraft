App.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [
      {
       xtype: 'TabBarMvc',
       items: [
              {
              text: 'Hjem',
              iconCls: 'home',
              iconMask: true,
              route: 'Home/index', // custom property of the TabBarMvc component
              },
              {
              text: 'Nyheter',
              iconCls: 'nyheter',
              iconMask: true,
              route: 'Home/nyheter', // custom property of the TabBarMvc component
              },
              {
              text: 'Anleggene',
              iconCls: 'anleggene',
              iconMask: true,
              route: 'Home/anleggene', // custom property of the TabBarMvc component
              },
              {
              text: 'Informasjon',
              iconCls: 'informasjon',
              iconMask: true,
              route: 'Home/informasjon', // custom property of the TabBarMvc component
              },
              ],
      },
      ],
                            


                                
});