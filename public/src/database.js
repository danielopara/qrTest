import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()

export async function getDeets(){
    const [result] = await pool.query("SELECT * FROM transfer")
    return result;
}


export async function addMoney(receiver){
    const [result] = await pool.query(
        ` UPDATE transfer SET receiver = receiver + ? WHERE id = 1 ` 
        , [receiver])
    
    return {id: result.getId,
        receiver : receiver,
        }
}

export async function removeMoney(payer){
    const [result] = await pool.query(`UPDATE transfer SET payer = payer - ? WHERE id = 1`, [payer])
    return {id: result.insertId,
    payer}
}

function transfer(amount){
    addMoney(amount);
    removeMoney(amount);
}

