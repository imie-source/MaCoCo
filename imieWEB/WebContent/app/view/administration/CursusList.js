Ext.define('ExtJsMVC.view.administration.CursusList', {
	extend : 'Ext.panel.Panel',
	xtype : 'cursus-Grid',
	title : 'liste des cursus',

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	initComponent : function() {
		this.items = {
			xtype : 'dataview',
			tpl : [ '<tpl for=".">', 
			        '<div class="cursusRowAdminWin" id="cususRowAdminWin{curId}">', 
			        '{curNom}',
					'</div>', '</tpl>'

			],
			itemSelector:'div.cursusRowAdminWin',
			store : 'CursusStore',
// test maxime

			listeners:
		    {
		    	afterrender:function()
		        {
		    		var renderSelector = Ext.query('div.cursusRowAdminWin'); 
	                for(var i in renderSelector)
	                {
	                	var renderRow = renderSelector[i];
	                	
	                	new Ext.Button(
	                	{
	                		cls : 'SeleniumModuleSuppButton',
	    					text:' X ',
	    					renderTo: renderRow,
	    					handler:function(){
	    						alert('Cursus supprimer');
	    					}
	    				});
	                } 
		        }
		    }			
// test maxime
		};
		this.callParent(arguments);
	}
});