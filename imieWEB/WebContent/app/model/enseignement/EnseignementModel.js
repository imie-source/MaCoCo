Ext.define('ExtJsMVC.model.enseignement.EnseignementModel',
	{
		extend : 'Ext.data.Model',
		fields : [
			          {name: 'entId'}, 
			          {name: 'entNom'},
			          {name: 'entContenu'}, 
			          {name: 'entObjet'}, 
			          {name : 'entContrainte'},
			          {name : 'entMateriel'},
			          {name : 'prerequis'},
			          {name : 'entSearch'}
		         ],
		hasMany:  {model: 'ExtJsMVC.model.enseignement.EnseignementModel', associationKey: 'prerequis'},
	    proxy: 
		{
	    	url: './webapi/enseignement/',
	    	type : 'rest',
	    	writer : 
	    	{
	    		nameProperty: 'mapping',
	    		writeAllFields: true,
	            transform: 
	            {
	                fn: function(data, request) 
	                {
	                	console.log('data brute');
	                	console.log(data);
	                    
	                	data.id = undefined;
	                    data.entSearch = undefined;
                    	console.log('cut coursCursuses');
	                    if(data.coursCursuses !== undefined && data.coursCursuses !==null){
	                    	console.log('oui');
		                    data.coursCursuses.forEach(function(element){
		                    	console.log(element);
		                    	element.savoirs = undefined;
		                    	element.enseignements = undefined;
		                    	
		                    });
	                    	
	                    }
                    	console.log('cut coursPromotions ?');
	                    if(data.coursPromotions !== undefined && data.coursPromotions !==null){
	                    	console.log('oui');
	                    	data.coursPromotions.forEach(function(element){
	                    		console.log(element);
	                    		element.savoirs = undefined;
		                    	element.enseignements = undefined;
		                    });	                    	
	                    }
                    	console.log('cut prerequis ?');
                    	if(data.prerequis !== undefined && data.prerequis !==null){
	                    	console.log('oui');
	                    	data.prerequis.forEach(function(element){
	                    		console.log(element);
	                    		element.id = undefined;
	                    		element.entSearch = undefined;
		                    });	                    	
	                    }
	                    console.log('data avant retour');
	                    console.log(data);
	                    return data;
	                },
	                scope: this
	            }
	    	}, 
	    	
		 	reader : 
			{
		        transform: 
		        {
		            fn: function(data) 
		            {
		            	if(data.entId != undefined)
		        		{
		            		data.id = 'entId'.concat(data.entId);
		        		}
		            	if(data.entContenu != undefined)
		        		{
		            		data.entSearch = data.entNom.concat(' : ').concat(data.entContenu);
		        		}else{
		        			data.entSearch = data.entNom;
		        		}
		            	
		            	
		            	return data;
		            	
		            },
		            scope: this
		        }
			}
	    },
	    
	    pseudoWriting: function()
	    {
	    	var pseudoWriter = this.getProxy().getWriter();
	    	return pseudoWriter.getRecordData(this);
	    }
	    
});