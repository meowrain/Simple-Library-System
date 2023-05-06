const inquirer = require("inquirer")
const fs = require("fs");
let books = [];
function loadBooks() {
    books = require("./data/books.json");
}
function saveBooks() {
    fs.writeFileSync('./data/books.json', JSON.stringify(books))
}
function addBooks() {
    inquirer.prompt([{
        name: 'title',
        message: '输入书籍名称：'
    }, {
        name: 'author',
        message: '输入作者名字： '
    }]).then(answers => {
        books.push({
            title: answers.title,
            author: answers.author
        });
        console.log(books);
        saveBooks();
        console.log('图书增加成功！')
    })
}
function listBooks() {
    console.log('下面是已存储的图书： ');
    books.forEach((book) => {
        console.log(`书名: ${book.title} | 作者： ${book.author}`)
    });
}
function menu() {
    inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: '请选择下面的一个选项： ',
        choices: ['1.添加图书', '2.列出所有图书', '3.退出系统']
    }).then(answer => {
        switch (answer.choice) {
            case '1.添加图书':
                addBooks();
                break;
            case '2.列出所有图书':
                listBooks();
                break;
            case '3.退出系统':
                process.exit();
        }
    });
}
loadBooks();
menu();
