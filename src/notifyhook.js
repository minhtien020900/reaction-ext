(function () {

    function notifyCallback(title, opt) {
        // opt.body = '＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗＊∗'
        opt.body = '                           (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•) (•_•)                     '
        // opt.body = '＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊'
    }

    const OldNotify = window.Notification;

    function newNotify(title, opt) {
        notifyCallback(title, opt);
        return new OldNotify(title, opt);
    }

    newNotify.requestPermission = OldNotify.requestPermission.bind(OldNotify);
    Object.defineProperty(newNotify, 'permission', {
        get: function () {
            return OldNotify.permission;
        }
    });

    window.Notification = newNotify;
})();