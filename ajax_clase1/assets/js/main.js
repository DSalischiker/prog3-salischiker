$(document).ready(function () {
    console.log("ready!");
    $('#handle_ajax').click(() => {
        $.ajax({
            url: 'https://reqres.in/api/users',
            success: (response) => {
                console.log(response.data);
                var usersList = $('#list');

                $.each(response.data, (index, el) => {
                    console.log(el.first_name);
                    usersList.append(
                        '<div class="card"><h2>' +
                        el.first_name +
                        '</h2><img src="' +
                        el.avatar +
                        '"</div>');
                });
            },
            error: (e) => {
                console.log('Error', e);
            },
            beforeSend: () => {
                $('#cp_primary_loader').show();
                console.log('Buscando data...');
            },
            complete: () => {
                $('#cp_primary_loader').hide();
                console.log('Data buscada!');
            }
        });
    });

    $('#handle_ajax_delete').click(() => {
        $('#list').html('');
    });


    /* $('#listado').append('<li>Usuario 1</li>') */
});