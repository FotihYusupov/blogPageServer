import { fetch } from "../../utils/pg.js";

const LOG_IN = `
  select 
    * 
  from 
    admins 
  where 
    admin_name = $1 
  and 
    admin_password = crypt($2, admin_password);
`

const DELETE_POST = `
  delete from posts where post_id = $1
`

export const login = (admin_name, admin_password) => 
  fetch(LOG_IN, admin_name, admin_password) 

export const deletePost = post_id => 
  fetch(DELETE_POST, post_id)