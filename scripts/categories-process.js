const url_for = hexo.extend.helper.get('url_for').bind(hexo);

function build_tag_tree(tree) {
    let ret = '<div class="category-box">';
    for(let item of tree) {
        ret += `
            <a class="category-link" href="${(url_for(item.path))}">
                ${item.name}
                <div class="category-count">${item.length}</div>
            </a>
        `;
        if ('children' in item && item.children.length>0) {
            ret += '<div class="children">'
            ret += build_tag_tree(item.children);
            ret += '</div>'
        }
    }
    ret += "</div>";
    return ret;
}

function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    
    for (i = 0; i < list.length; i += 1) {
      map[list[i]._id] = i;
      list[i].children = [];
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if ('parent' in node) {
        list[map[node.parent]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
}

hexo.on('generateBefore', function(post){
    let tree = list_to_tree(hexo.locals.get("categories").data);
    let cate_tree = build_tag_tree(tree);
    hexo.extend.helper.register('categories_tree', function() {
        return cate_tree;
    })
});
  

