# Hammer Systems. Тестовое задание для Frontend разработчика. Часть 1.

В соответствии с Тестовым заданием:
- Реализовано боковое меню с разделами, аналогично тому, что изображено на картинке в задании
- Реализация Списка клиентов
- Получение данных о клиентах по api https://jsonplaceholder.typicode.com/users
- Пока данные загружаются на экране должен крутиться лоадер
- Реализована возможность удалять клиентов из списка клиентов
- Профайл клиента с возможностью редактировать данные клиента
- При сохранении данных имитируется отправка данных на сервер, секунду крутиться лоадер 

## Созданы или изменены компоненты
src/configs
NavigationConfig.js - данные для отрисовки бокового меню

src/lang
index.js - запись о русском языке

src/lang/locales
ru-RU.json - перевод пунктов бокового меню на русский язык

src/lang/entries
ru_RU.js - данные о русском языке

src/configs/views
index.js - роутинг в компоненте Views

src/configs/views/app-views
index.js - роутинг в компоненте AppViews

src/configs/views/app-views/main
index.js - роутинг в компоненте Main

src/configs/views/app-views/main/customers
index.js - роутинг в компоненте Customers

src/configs/views/app-views/main/customers/list
index.js - страница со списком клиентов
OpenProfile.js - страница со профайлом клиента
EditProfile.js - страница редактирования профайла клиента

src/redux
src/redux/constants/Customers.js - constants для state Customers
src/redux/actions/Customers.js - actions для state Customers
src/redux/reducers/Customers.js - reducers для state Customers


## Cтек
- JavaScript
- React
- Redux, Redux Thunk
- Axios
- Antd & Antd Design

