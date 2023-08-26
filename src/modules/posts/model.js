import { fetchData, fetch } from "../../utils/pg.js";

const GET_POSTS = `
    select 
        * 
    from 
        posts as p
    join
        users as u
    on
        p.user_id = u.user_id
    join
        categories as c
    on
        p.post_category = c.category_id
`;

const SEARCH_POST = `
    select
        *
    from
        posts
    where
        post_title ILIKE $1
`

const BY_ID = `
    select 
        * 
    from 
        posts as p
    join
        users as u
    on
        p.user_id = u.user_id
    join
        categories as c
    on
        p.post_category = c.category_id
    where
        p.post_id = $1;
`

const ADD_POST = `
    insert into posts(post_title, post_body, post_img, post_category, user_id)
        values($1, $2, $3, $4, $5);
`;

const DELETE_POST = `
    delete from posts where post_id = $1 and user_id = $2
`;

const UPDATE_POST = `
    update posts 
    set 
        post_title = $1, 
        post_body = $2, 
        post_img = $3 ,
        post_category = $4 
    where 
        post_id = $5
    and
        user_id = $6
`;

export const getPosts = () => fetchData(GET_POSTS);

export const byId = id => fetch(BY_ID, id);

export const addPost = (
  post_title,
  post_body,
  post_img,
  post_category,
  user_id
) => fetch(ADD_POST, post_title, post_body, post_img, post_category, user_id);

export const deletePost = (post_id, user_id) =>
  fetch(DELETE_POST, post_id, user_id);

export const updatePost = (
  post_title,
  post_body,
  post_img,
  post_category,
  post_id,
  user_id
) => fetch(UPDATE_POST, post_title, post_body, post_img, post_category, post_id, user_id);

export const searchPost = (title) => fetchData(SEARCH_POST, title)