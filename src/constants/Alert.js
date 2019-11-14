import Swal from 'sweetalert2'

export function handleRespond(respondStatus, respondMessage, respondText) {
    switch (respondStatus) {
        case 200 :
            return (
                Swal.fire({
                    icon: 'success',
                    title: respondMessage,
                    text: respondText,
                    showConfirmButton: false,
                    timer: 1500
                })
            );
        case 400 :
            return (
                Swal.fire({
                    icon: 'error',
                    title: respondMessage,
                })
            );
        case 403 :
            return (
                Swal.fire({
                    icon: 'error',
                    title: respondMessage,
                })
            );
        case 404 :
            return (
                Swal.fire({
                    icon: 'info',
                    title: respondMessage,
                })
            );
        case 500 :
            return (
                Swal.fire({
                    icon: 'info',
                    title: respondMessage,
                })
            );
        default :
            return (
                Swal.fire({
                    icon: 'question',
                    title: respondMessage,
                })
            );
    }
}