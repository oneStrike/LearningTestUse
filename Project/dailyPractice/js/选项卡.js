let tabBox = document.querySelector('#tabBox'),
    childAll = Array.from(tabBox.children),
    option = childAll.filter(item => myPublic.hasClass(item, 'option'))[0],
    optionList = Array.from(option.children).filter(item => item.tagName === 'LI'),
    conList = childAll.filter(item => myPublic.hasClass(item, 'con')),
    lastIndex = 0;

optionList.forEach(function (item, index) {
    item.onmousemove = function () {
        if (lastIndex === index) return;
        myPublic.addClass(item, 'active');
        myPublic.removeClass(optionList[lastIndex], 'active');
        myPublic.addClass(conList[index], 'active');
        myPublic.removeClass(conList[lastIndex], 'active');
        lastIndex = index;
    }
})