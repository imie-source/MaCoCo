Ext.define('ExtJsMVC.model.referentiel.CompetencePro',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'comId'}, 
			          {name: 'text', mapping: 'comLibelle'}, 
			          {name: 'activiteType'}, 
			          {name: 'children', mapping: 'savoirs'}
		         ],
		         
		childType : 'ExtJsMVC.model.referentiel.Savoir',
	    hasMany:  {model: 'ExtJsMVC.model.referentiel.Savoir', associationKey : 'savoirs'},	
	    proxy: 
		{
	    	url: './webapi/competencepro/',
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
	                    data.leaf = undefined;
	                    data.parentId = undefined;
	                    data.children = undefined;
	                    data.text = undefined;
	                    data.savoirs = undefined;
	                    data.activiteType.competencePros = undefined; 
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
		            	if(data.comId != undefined)
		        		{
		            		data.id = 'comId'.concat(data.comId);
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