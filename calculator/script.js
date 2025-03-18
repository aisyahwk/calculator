let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML.trim();

        if (buttonText === '=') {
            try {
                string = eval(string); // Menghitung hasil
                input.value = string;
            } catch {
                input.value = "Error"; // Menampilkan error jika ada kesalahan
                string = "";
            }
        }
        else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        }
        else if (buttonText === 'DE') {
            string = string.slice(0, -1); // Menghapus karakter terakhir
            input.value = string;
        }
        else {
            string += buttonText;
            input.value = string;
        }
    });
});
