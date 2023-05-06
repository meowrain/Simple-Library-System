const mysql = require("mysql");
const inquirer = require("inquirer");
let books = [];
const connection = mysql.createConnection({
  host: "localhost",
  user: "user_name",
  password: "your_password",
  database: "database_name",
});
function loadBooks() {
  connection.query("SELECT * FROM books", (err, results) => {
    if (err) {
      console.error(err);
    } else {
      books = results;
    }
  });
}
// function saveBooks() {
//     const values = books.map((book) => {
//         return [book.title, book.author];
//     });
//     const sql = 'INSERT INTO books (title,author) VALUES ?';
//     connection.query(sql, [values], (error) => {
//         if (error) {
//             console.error('保存失败！')
//         }
//     })
// }
function addBooks() {
  inquirer
    .prompt([
      {
        name: "title",
        message: "输入书籍名称：",
      },
      {
        name: "author",
        message: "输入作者名字： ",
      },
    ])
    .then((answers) => {
      const values = [[answers.title, answers.author]];
      const sql = "INSERT INTO books (title,author) VALUES ?";
      connection.query(sql, [values], (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("图书增加成功！");
          menu();
        }
      });
    });
}
function listBooks() {
  const sql = "SELECT * FROM books";
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
    } else {
      console.log("下面是已经存储的图书:");
      results.forEach((book) => {
        console.log(`书名: ${book.title} | 作者： ${book.author}`);
      });
    }
    menu();
  });
}
function menu() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "请选择下面的一个选项： ",
      choices: ["1.添加图书", "2.列出所有图书", "3.退出系统"],
    })
    .then((answer) => {
      switch (answer.choice) {
        case "1.添加图书":
          addBooks();
          break;
        case "2.列出所有图书":
          listBooks();
          break;
        case "3.退出系统":
          process.exit();
      }
    });
}
loadBooks();
menu();
