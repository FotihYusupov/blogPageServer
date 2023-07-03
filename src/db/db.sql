create table users (
    user_id serial not null primary key,
    user_full_name varchar not null,
    user_name varchar(32) not null,
    user_password varchar(60) not null
);

create table categories (
    category_id serial not null primary key,
    category_name varchar(32)
);

create table posts (
    post_id serial not null primary key,
    post_title varchar not null,
    post_body varchar not null,
    post_img text,
    post_category integer references categories(category_id),
    user_id integer references users(user_id)
);

create table comments (
    comment_id serial not null primary key,
    comment_body varchar,
    user_id integer references users(user_id)
);

insert into posts(post_title, post_body, post_img, post_category, user_id)
    values('Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quaerat consequuntur eos tempore dolor veniam molestias sit cum similique odit corrupti illo maxime rem facere nobis, modi dolorem quas? Culpa animi, odit saepe tempore perferendis laborum esse neque sequi. Veritatis facilis sed adipisci explicabo excepturi consequuntur ducimus, labore perspiciatis quibusdam. Explicabo ipsa ut, voluptatibus dolores molestiae quos similique id doloribus saepe sit delectus deserunt?',
        'https://unsplash.it/500/500',
        1,
        2
    );