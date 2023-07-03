import { fetch } from "../../utils/pg.js";

const SIGN_IN = `
  insert into users(user_full_name, user_name, user_password)
  values($1, $2, crypt($3, gen_salt('bf'))) returning *;
`;

const LOG_IN = `
  select 
    * 
  from 
    users 
  where 
    user_name = $1 
  and 
    user_password = crypt($2, user_password);
`

const GET_PROFILE = `
select
  users.user_name,
  users.user_full_name,
  json_agg(
    p
  ) as posts
  from
      users
  join
    posts as p
  on
      users.user_id = p.user_id
  group by
      users.user_id
  having
    users.user_id = $1;
`

export const signin = (user_full_name, user_name, user_password) =>
  fetch(SIGN_IN, user_full_name, user_name, user_password);

export const login = (user_name, user_password) => 
  fetch(LOG_IN, user_name, user_password) 

export const getProfile = user_id => fetch(GET_PROFILE, user_id)


/* 
select
  users.user_name,
  users.user_full_name,
  json_agg(
    p
  ) as posts
  from
      users
  join
    posts as p
  on
      users.user_id = p.user_id
  group by
      users.user_id
  having
    users.user_id = $1;
*/