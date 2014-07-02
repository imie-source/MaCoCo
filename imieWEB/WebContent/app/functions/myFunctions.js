var cleanTreeFields =  function(data) 
{
    data.id = undefined;
    data.leaf = undefined;
    data.parentId = undefined;
    data.children = undefined;
    data.text = undefined;
    return data;
}