import pgp from 'pg-promise'
import dotenv from 'dotenv'

// load .env variables
dotenv.load();

//get the postgresql database connection url 
const cn = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'

export default callback => {
	
	// connect to a  Postgresql/postgis database, then pass it to `callback`:
	const db = pgp()(cn);

	callback(db);
}
