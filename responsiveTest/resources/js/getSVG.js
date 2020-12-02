function getSVG(urlX, callback) {
    $.ajax(
        {
            url: urlX,
            dataType: 'html',
            type: 'GET',
            success: function (data) {
                callback(data);
            }
        });
}