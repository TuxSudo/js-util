export default function( items, properties ) {
    return items.map(item=>{
        var o={};
        properties.forEach(p=>o[p]=item[p]);
        return o;
    });
};
