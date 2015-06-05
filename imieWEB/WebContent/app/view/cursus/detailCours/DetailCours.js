Ext.define('ExtJsMVC.view.cursus.detailCours.DetailCours', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-DetailCours',
    store: 'CursusStore',
    title : 'Detail Cours',
    requires : [
	            'ExtJsMVC.view.cursus.detailCours.DetailCoursCursusViewController',
	],
	
	controller : 'DetailCoursCursusViewController',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailCoursNom',
        	itemId : 'detailCoursNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentSecondTreeItem.text}',
            width : 500
        },
        {
        	id : 'seleniumDetailCoursDuree',
            xtype : 'textfield',
            name : 'cocDuree',
            bind:'{currentSecondTreeItem.cocDuree}',
            fieldLabel : 'Duree'
        },
        {
        	id : 'seleniumDetailCoursType',
            xtype : 'textfield',
            name : 'cocType',
            bind:'{currentSecondTreeItem.cocType}',
            fieldLabel : 'Type'
        },
        {
        	id : 'seleniumDetailCoursObj',
            xtype : 'textareafield',
            name : 'cocObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondTreeItem.cocObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursEval',
            xtype : 'textfield',
            name : 'cocEvaluation',
            fieldLabel : 'Evaluation',
            bind:'{currentSecondTreeItem.cocEvaluation}',
            width : 500
        },
        {
        	id : 'seleniumDetailCoursComm',
            xtype : 'textareafield',
            name : 'cocCommentaires',
            fieldLabel : 'Commentaires',
            bind:'{currentSecondTreeItem.cocCommentaires}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveCoursCursusClick',
            disabled:true,
			bind:{
				disabled:'{!itemStatus.dirtyAndValid}'
			},
        },
        
//        {
//		    title: 'Glisser des savoirs dans cet espace',
//		    bodyPadding: 10,
//		    itemId : 'Template',
//		    
//		    tpl : new Ext.XTemplate
//		    (
//	    		'<tpl for="savoirs">',
//	    			'<div>hello</div>',
//						'<div class="savoir-row" id="savoir-{savId}">',
//							'Savoir : {savLibelle}',
//						'</div>',
//				'</tpl>'
//			),
//			
//		    listeners: {
//		        'afterrender': function () 
//		        {
//		            this.dropZone = Ext.create('Ext.dd.DropTarget', this.getEl(), {
//		            	ddGroup: 'groupCoursSavoir',
//		                panel: this,
//		                
//		                notifyDrop : function(source, e, data) 
//		                {
//		                    console.log('drop');
//		                    return true;
//		                }          
//		            });  
//		            
//		            
//		            
//		            
//		            var renderSelector = Ext.query('div.savoir-row'); 
//	                for(var i in renderSelector)
//	                {
//	                	var renderRow = renderSelector[i];
//	                	
//	                	new Ext.Button(
//	                	{
//	    					text:' X ',
//	    					renderTo: renderRow,
//	    				    handler: function(bouton) 
//	    				    {
//	    				    	var savoirRowId = bouton.renderTo.id;
//	    				    	var sliceIndex = savoirRowId.indexOf('-');
//	    				    	savoirRowId = savoirRowId.slice(sliceIndex+1,savoirRowId.length);
//	    				    	
//	    				    	//suppression de l'element
//	    				    	
//	    				    	var savoirModel = this.getReferentielSavoirModel();
//	    				    	savoirModel.load(savoirRowId,
//	    				    	{
//	    						  scope: this,
//	    						  callback: function(record, operation) 
//	    						  {
//	    							  console.log(record);
//	    							  record.erase();
//	    						  }
//	    				    	});
//	    				    }
//	    				});
//	                }    
//		            
//		            
//		        }
//		    } 
//		}
    ]
});