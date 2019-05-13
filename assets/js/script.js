$(document).ready(function () {
        $.ajax({
            url: "https://api.doc.govt.nz/v2/campsites",
            type: "GET",
            dataType: "json",
            headers: { "x-api-key": "AGzltg49Lx3bVQJdJjToy20ssY8ep6iJ9ai504vK" }
        });
    });