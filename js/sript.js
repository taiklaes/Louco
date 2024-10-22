// Constantes
const text = "EU SOU MAIS LOUCO QUE TODOS VOCÊS"
const input = document.getElementById('input');
const output = document.getElementById('output');

// Função - Traduzir para Louco
function translate_to_louco(){
    // Vars
    let value = input.value;
    let list_of_words = value.split(' ');

    // Adicionar louco quando pular a linha
    output.value = '';
    if (value != ''){
        for(let index = 0; index < list_of_words.length; index++){
            let new_value = text.split(' ')[index % text.split(' ').length];
            document.getElementById('output').value += new_value + ' ';
        }
    }
}
