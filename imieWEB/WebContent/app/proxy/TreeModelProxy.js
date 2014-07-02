
var myWriter = new Ext.data.JsonWriter({
   allowSingle: true,
   encode: false,
   writeAllFields: true
});

var myReader = new Ext.data.JsonReader({
	
});


Ext.define('ExtJsMVC.proxy.TreeModelProxy', 
{ 
	extend: 'Ext.data.proxy.Rest',
	alias: 'proxy.treemodelproxy',
	headers: {'Content-Type': "application/json" },
//    reader: myReader,
//    writer : myWriter,
    buildRequest: function(operation) 
    { 
        var request = this.callParent(arguments); 
        
        console.log('Request.getParams()');
        console.log(request.getParams());
        
//        request.setJsonData(request.getParams());
//        request.getJsonData().node = undefined;
        
        console.log('request.getJsonData()');
        console.log(request.getJsonData());
        
        console.log('request.getUrl()');
        console.log(request.getUrl());
        
        console.log('url base');
        console.log(this.url);
        
        console.log('operation');

        
        Ext.Array.each(operation.getRecords(), function(record, index) 
        {
            record.data.id = undefined;
            record.data.leaf = undefined;
            record.data.parentId = undefined;
            console.log(record);
        });
        
        
        
        request.setParams({});
        
        return request; 
    }, 
 
//    getMethod: function(request) { 
//        return 'POST'; 
//    } 
});