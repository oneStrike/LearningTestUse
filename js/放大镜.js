$(function () {
    let $minBox = $('.min-box'),
        $bigBox = $minBox.children('.big-box'),
        $maxBox = $('.max-box'),
        $maxImg = $maxBox.children('img');
    $minBox.on('mousemove', function (e) {
        $bigBox.add($maxBox).css({
            display: 'block'
        });
        let {
            left: $bigL,
            top: $bigT
        } = $bigBox.offset();
        $bigL = (e.clientX - $minBox.offset().left) - $bigBox.outerWidth() / 2;
        $bigT = (e.clientY - $minBox.offset().top) - $bigBox.outerHeight() / 2;
        let minL = 0,
            maxL = $minBox.outerWidth() - $bigBox.outerWidth(),
            minT = 0,
            maxT = $minBox.outerHeight() - $bigBox.outerHeight();
        $bigL = $bigL > maxL ? maxL : ($bigL < minL ? minL : $bigL);
        $bigT = $bigT > maxT ? maxT : ($bigT < minT ? minT : $bigT);
        $bigBox.css({
            top: $bigT,
            left: $bigL
        });
        $maxImg.css({
            top: -$bigT * 3,
            left: -$bigL * 3
        })
    }).on('mouseleave', function () {
        $bigBox.add($maxBox).css({
            display: 'none'
        })
    });
});