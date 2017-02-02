$(document).ready(function () {
    $('#firstcontainer').click(function () {
        $('#firstcontainer select').css('display', 'inline-block');
    });
    $(document).mouseup(function (e) {
        var container = $("#firstcontainer select");
        var container2 = $("#firstcontainer select:last-child");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.hide();
        }
        if (container.val() && container2.val() != null) {
            $('#firstobject').val('From' + ' ' + container.val() + ' ' + 'To' + ' ' + container2.val());
        }
    });
});
