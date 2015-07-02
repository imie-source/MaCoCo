Ext.define('ExtJsMVC.view.promotion.detailPromotion.DetailPromo', {
    extend : 'Ext.form.Panel',
    xtype  : 'promo-DetailPromo',

    store: 'PromotionStore',
    title   : 'Informations',
    bodyPadding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailPromoNom',
        	itemId: 'detailPromoNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Nom',
            bind:'{currentSecondPromoTreeItem.text}',
            width : 500,
        },
        
        {
        	id : 'seleniumDetailPromoSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSavePromoClick',
            disabled:true,
			bind:{
				disabled:'{!itemPromoStatus.dirtyAndValid}'
			},
        },
        
        {
        	id : 'seleniumDetailPromoPrint',
            xtype : 'button',
            text : 'Imprimer schéma pédagogique',
            itemId : 'Print',
            handler :'onPrintClick',
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
        	    	        	xtype : 'promotion-periodePromotionGrid',
        	    	        	itemId : 'promoPeriodeGrid',
        	    	            id : 'promoPeriodeGrid',
        	    	            title: 'Periode',
        	    	            bind:{
        	    	            	store:'{periodePromotionStore}',
        	    				},
        	    				
        	    				height : 180,
        	    				autoScroll : true
        	    	        },
        	    	        {
        	    	        	id : 'seleniumDetailPromoAdd',
        	    	            xtype : 'button',
        	    	            text : 'Ajouter Période',
        	    	            itemId : 'AddRecord',
        	    	            handler :'onAddPeriodePromotionClick',
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
								xtype : 'promotion-childrenGrid',
					        	itemId : 'promoUfGrid',
					            id : 'promoUfGrid',
					            title: 'Unité de formation',
					            bind:{
					            	store:'{ufPromoStore}',
								},
								height : 180,
								autoScroll : true
							},
							{
								id : 'seleniumDetailCursusAdd',
							    xtype : 'button',
							    text : 'Ajouter UF',
							    itemId : 'AddRecord',
							    handler :'onAddUfPromoClick',
							    width : 150,
							},	         	     
        	         ]
        	      },
        	]
        },
        ,
        {
        	id : 'messageNbJours',
        }
    ]
});