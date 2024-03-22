function toggleDetail(e) {
    const target = $(e.target);

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }

    const item = $(target).parents(".about-exp-item");
    const detail = $(item).children(".about-exp-item-detail");
    $(detail).slideToggle();
}

function onFormSubmit(e) {
    e.preventDefault();
    const email = $("#inp_email").val();
    const subject = $("#inp_subject").val();
    const message = $("#inp_message").val();

    if (!email) {
        alert("Email is required");
    } else if (!subject) {
        alert("Subject is required");
    } else if (!message) {
        alert("Message is required");
    } else {
        $("#inp_email").val("");
        $("#inp_subject").val("");
        $("#inp_message").val("");
        alert("Form Submitted");
    }
}

