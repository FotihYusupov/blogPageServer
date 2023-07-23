import { fetchData } from "../../utils/pg.js";

const GET_CATEGORIES = `
    select 
        *
    from
        categories;
`

const BY_CATEGORY = `
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
        p.post_category = $1
`

export const getCategories = () => fetchData(GET_CATEGORIES)

export const byCategory = id => fetchData(BY_CATEGORY, id)