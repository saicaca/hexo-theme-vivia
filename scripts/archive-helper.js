hexo.extend.helper.register('get_archive_list', function(config) {
    let posts = hexo.locals.get('posts').find({}).data;
    let map = {}, list = [];
    let curr = 0;
    for (let item of posts) {
        let key = item.date.format('YYYYMM');
        if (key in map) {
            list[map[key]].count++;
        } else {
            item.date.locale(hexo.config.language);
            list.push({
                year: item.date.year(),
                month: item.date.month(),
                str: item.date.format("MMMM YYYY"),
                count: 1,
                url: `/archives/${item.date.format('YYYY/MM')}`
            })
            map[key] = curr++;
        }
    }

    list.sort(function(a, b) {
        if (a.year < b.year)
            return 1;
        if (a.year > b.year)
            return -1;
        if (a.month < b.month)
            return 1;
        if (a.month > b.month)
            return -1;
        return 0;
    });

    if (config && config.order == -1)
        list.reverse();

    return list;
})
