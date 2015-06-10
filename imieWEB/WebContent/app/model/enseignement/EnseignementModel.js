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
	    	url: '/imieWEB/webapi/enseignement/',
	    	type : 'rest',
	    	writer : 
	    	{
	    		nameProperty: 'mapping',
	    		writeAllFields: true,
	            transform: 
	            {
	                fn: function(data, request) 
	                {
	                    data.id = undefined;
	                    data.entSearch = undefined;
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
		            		data.entSearch = data.entNom.concat(data.entContenu);
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