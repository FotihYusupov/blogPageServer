import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
    connectionString: 'postgres://hdwebxzx:yjFqKGcZe8GQrkvspuplcYoLpTXFGc8e@mouse.db.elephantsql.com/hdwebxzx'
})

export const fetchData = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows } = await client.query(SQL, params.length ? params : null)
        return rows
    } finally{
        client.release()
    }
}

export const fetch = async(SQL, ...params) => {
    const client = await pool.connect()
    try{
        const { rows: [row] } = await client.query(SQL, params.length ? params : null)
        return row
    } finally{
        client.release()
    }
}