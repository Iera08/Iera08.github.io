var admin, name= ('Лера');
admin=name;
alert("admin " + admin)
// ид 3
do
{
var age = prompt('Сколько вам лет?', 'Введите ваш возраст сюда');
}
while (!confirm("Вы уверены что вам "+ age + "?"))