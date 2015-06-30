Ext.define('ExtJsMVC.view.cursus.detailCursus.DetailCursus', {
    extend : 'Ext.form.Panel',
    xtype  : 'cursus-DetailCursus',
    
    store: 'CursusStore',
    title   : 'Informations',
    bodyPadding : 10,
    items : 
    [
        {
        	id : 'seleniumDetailCursusNom',
        	itemId: 'detailCursusNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Nom',
            bind:'{currentSecondTreeItem.text}',
            width : 500,
        },
        
        {
        	id : 'seleniumDetailCursusSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveCursusClick',
            disabled:true,
			bind:{
				disabled:'{!itemStatus.dirtyAndValid}'
			},
        },

        {
        	id : 'seleniumDetailCursusAddPromo',
            xtype : 'button',
            text : 'Ajouter Promotion',
            itemId : 'AddPromoRecord',
            handler :'onAddPromoClick',
        },
        {
        	id : 'seleniumDetailCursusPrint',
            xtype : 'button',
            text : 'Imprimer schéma pédagogique',
            handler : 'onPrintClick',
            itemId : 'Print'
        },
      
        {
        	layout:{
        		type:'hbox',
        		align:'stretch',
        		flex  : 1,
        		
        	},
        	items : [
        	      {
        	    	  width : '50%',
        	    	  layout:{
        	    			type:'vbox',
        	    			align:'stretch',
        	    			flex  : 1,
        	    			
        	    		},
        	    	  items : [
        	    	       {
        	    	        	xtype : 'cursus-periodeGrid',
        	    	        	itemId : 'cursusPeriodeGrid',
        	    	            id : 'cursusPeriodeGrid',
        	    	            title: 'Periode',
        	    	            
        	    	            bind:{
        	    	            	store:'{periodeStore}',
        	    				},
        	    				height : 180,
        	    				autoScroll : true
        	    	        },
        	    	        {
        	    	        	id : 'seleniumDetailCursusAddPeriode',
        	    	            xtype : 'button',
        	    	            text : 'Ajouter Periode',
        	    	            itemId : 'AddPeriodeRecord',
        	    	            handler :'onAddPeriodeCursusClick',
        	    	            width : 150,
        	    	        },

        	         	]
        	      },
        	      {
        	    	  width : '50%',
        	    	  layout:{
        	    			type:'vbox',
        	    			align:'stretch',
        	    			flex  : 1,
        	    		},
        	    	  items : [
							{
								xtype : 'cursus-childrenGrid',
								itemId : 'cursusUfGrid',
							    id : 'cursusUfGrid',
							    title: 'Unité de formation',
							    bind:{
							    	store:'{ufStore}',
								},
								height : 180,
								autoScroll : true
							},
							{
								id : 'seleniumDetailCursusAdd',
							    xtype : 'button',
							    text : 'Ajouter UF',
							    itemId : 'AddRecord',
							    handler :'onAddUfCursusClick',
							    width : 150,
							},	         	     
        	         ]
        	      },
        	]
        },
        {
        	id : 'messageNbJours',
        }
        
    ]
});