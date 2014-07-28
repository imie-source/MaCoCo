Ext.define('ExtJsMVC.view.cursus.DetailCours_Savoir', {
	extend : 'Ext.panel.Panel',
	
    title: 'Savoirs',
    bodyPadding: 10,
    
    tpl : new Ext.XTemplate
    (
		'<tpl for=".">',
				'<div class="savoir-row" id="savoir-{savId}">',
					'Savoir : {savLibelle}',
				'</div>',
		'</tpl>'
	),
	
    listeners: {
        'afterrender': function () 
        {
            this.dropZone = Ext.create('Ext.dd.DropTarget', this.getEl(), {
            	ddGroup: 'groupCoursSavoir',
                panel: this,
                
                notifyDrop : function(source, e, data) 
                {
                    console.log('drop');
                    return true;
                }          
            });  
            
            
            
            
            var renderSelector = Ext.query('div.savoir-row'); 
            for(var i in renderSelector)
            {
            	var renderRow = renderSelector[i];
            	
            	new Ext.Button(
            	{
					text:' X ',
					renderTo: renderRow,
				    handler: function(bouton) 
				    {
				    	var savoirRowId = bouton.renderTo.id;
				    	var sliceIndex = savoirRowId.indexOf('-');
				    	savoirRowId = savoirRowId.slice(sliceIndex+1,savoirRowId.length);
				    	
				    	//suppression de l'element
				    	
				    	var savoirModel = this.getReferentielSavoirModel();
				    	savoirModel.load(savoirRowId,
				    	{
						  scope: this,
						  callback: function(record, operation) 
						  {
							  console.log(record);
							  record.erase();
						  }
				    	});
				    }
				});
            }    
            
            
        }
    } 
});