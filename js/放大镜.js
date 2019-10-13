$(function () {
    let $minBox = $('.min-box'),
        $bigBox = $minBox.children('.big-box'),
        $maxBox = $('.max-box');
    $minBox.on('mousemove', function () {
        $bigBox.add($maxBox).css({
            display: 'block'
        });
        let {
            left: bigL,
            top: bigT
        } = $bigBox.offset();
    }).on('mouseout', function () {
        $bigBox.add($maxBox).css({
            display: 'none'
        })
    });;
});