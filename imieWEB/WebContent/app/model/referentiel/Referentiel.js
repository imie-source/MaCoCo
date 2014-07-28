Ext.define('ExtJsMVC.model.referentiel.Referentiel',
	{
		extend : 'Ext.data.TreeModel',
		fields : [
			          {name: 'refId'}, 
			          {name: 'text', mapping: 'refNom'}, 
			          {name: 'children', mapping: 'activiteTypes'}
		         ],
		childType : 'ExtJsMVC.model.referentiel.ActiviteType',
	    hasMany:  {model: 'ExtJsMVC.model.referentiel.ActiviteType', name: 'activiteTypes'},	
	   
	    proxy: 
		{
	    	url: '/imieWEB/webapi/referentiel/',
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
	                    data.activiteTypes = undefined;
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